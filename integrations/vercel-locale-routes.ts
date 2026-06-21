import type { AstroIntegration } from 'astro';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { NON_DEFAULT_LOCALES } from '../src/i18n/locales';

/**
 * Inject explicit SSR routes for locale-prefixed URLs before Vercel's 404 catch-all.
 * Without these, /de, /it, etc. only match `^/.*$` with status 404 and may not
 * reach Astro middleware reliably in production.
 */
export function vercelLocaleRoutes(): AstroIntegration {
  return {
    name: 'vercel-locale-routes',
    hooks: {
      'astro:build:done': ({ logger }) => {
        const configPath = join(process.cwd(), '.vercel/output/config.json');
        const config = JSON.parse(readFileSync(configPath, 'utf8')) as {
          routes?: Record<string, unknown>[];
        };

        const localePattern = NON_DEFAULT_LOCALES.join('|');
        const localeRoutes = [
          { src: `^/(${localePattern})/?$`, dest: '_render' },
          { src: `^/(${localePattern})(?:/(.*))?/?$`, dest: '_render' },
        ];

        const routes = config.routes ?? [];
        const catchAllIdx = routes.findIndex(
          (r) => r.src === '^/.*$' && r.dest === '_render' && r.status === 404,
        );

        if (catchAllIdx === -1) {
          config.routes = [...routes, ...localeRoutes];
        } else {
          config.routes = [
            ...routes.slice(0, catchAllIdx),
            ...localeRoutes,
            ...routes.slice(catchAllIdx),
          ];
        }

        writeFileSync(configPath, `${JSON.stringify(config, null, '\t')}\n`);
        logger.info('[i18n] ✓ locale SSR routes injected into .vercel/output/config.json');
      },
    },
  };
}
