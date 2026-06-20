import type { AstroIntegration } from 'astro';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { assertServicePageSlugParity } from '../src/lib/service-page-slugs';

export function assertSitemapServices(): AstroIntegration {
  return {
    name: 'assert-sitemap-services',
    hooks: {
      'astro:build:done': ({ logger }) => {
        const serviceDir = join(process.cwd(), 'src/pages/service');
        const fsSlugs = readdirSync(serviceDir)
          .filter((f) => f.endsWith('.astro') && f !== 'index.astro')
          .map((f) => f.replace(/\.astro$/, ''))
          .sort();

        assertServicePageSlugParity(fsSlugs);
        logger.info(`[sitemap] ✓ All ${fsSlugs.length} service pages will be in sitemap.xml`);
      },
    },
  };
}
