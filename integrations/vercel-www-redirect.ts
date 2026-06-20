import type { AstroIntegration } from 'astro';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/** Inject www → apex 301 into Build Output API routes (runs before app handlers). */
export function vercelWwwRedirect(): AstroIntegration {
  return {
    name: 'vercel-www-redirect',
    hooks: {
      'astro:build:done': ({ logger }) => {
        const configPath = join(process.cwd(), '.vercel/output/config.json');
        const config = JSON.parse(readFileSync(configPath, 'utf8')) as {
          routes?: Record<string, unknown>[];
        };

        config.routes = [
          {
            src: '/(.*)',
            has: [{ type: 'host', value: 'www.rhodesrentaboat.com' }],
            status: 308,
            headers: { Location: 'https://rhodesrentaboat.com/$1' },
          },
          ...(config.routes ?? []),
        ];

        writeFileSync(configPath, `${JSON.stringify(config, null, '\t')}\n`);
        logger.info('[redirect] ✓ www → apex 308 injected into .vercel/output/config.json');
      },
    },
  };
}
