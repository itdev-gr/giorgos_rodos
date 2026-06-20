import type { AstroIntegration } from 'astro';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { enrichTourDetailContent, tourDetailWordCount } from '../src/lib/tour-detail-content';

const MIN_TOUR_DETAIL_WORDS = 700;

function assertTourDetailDepth() {
  const samples = [
    {
      name: 'sparse Symi cruise',
      tour: {
        title: 'Symi Day Trip from Rhodes',
        slug: 'symi-day-trip',
        service_page: 'rhodes-boat-cruises',
        description: 'Full day excursion to Symi island with swim stop and free time in the harbour.',
        price: 'From €45',
      },
    },
    {
      name: 'sparse east coast',
      tour: {
        title: 'East Coast Day Cruise',
        slug: 'east-coast-cruise',
        service_page: 'rhodes-boat-tours',
        description: 'Relaxed day cruise with swimming stops along the Rhodes coastline.',
      },
    },
  ];

  for (const { name, tour } of samples) {
    const enriched = enrichTourDetailContent(tour);
    const words = tourDetailWordCount(tour, tour.description, enriched);
    if (words < MIN_TOUR_DETAIL_WORDS) {
      throw new Error(`[tour-detail] "${name}" only ${words} words (need ${MIN_TOUR_DETAIL_WORDS}+)`);
    }
  }
}

export function assertImgAlt(): AstroIntegration {
  return {
    name: 'assert-img-alt',
    hooks: {
      'astro:build:start': () => {
        const script = join(process.cwd(), 'scripts/check-img-alt.mjs');
        const result = spawnSync(process.execPath, [script], {
          stdio: 'inherit',
          cwd: process.cwd(),
        });

        if (result.status !== 0) {
          throw new Error('[lint:img-alt] build blocked — fix <img> alt text issues above');
        }

        assertTourDetailDepth();
      },
    },
  };
}
