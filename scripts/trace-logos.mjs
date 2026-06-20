import { trace } from 'potrace';
import { writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const SOURCES = [
  {
    src: join(homedir(), 'Downloads', 'WhatsApp Image 2026-04-09 at 23.11.27.jpeg'),
    dst: 'public/assets/img/brand/logos/logo-traced.svg',
    bg: '#F5F1E8',
    fg: '#1a1a1a',
  },
  {
    src: join(homedir(), 'Downloads', 'WhatsApp Image 2026-04-09 at 23.11.28.jpeg'),
    dst: 'public/assets/img/brand/logos/logo-white-traced.svg',
    bg: '#0b0b0b',
    fg: '#ffffff',
  },
];

for (const { src, dst, bg, fg } of SOURCES) {
  const svg = await new Promise((resolve, reject) => {
    trace(
      src,
      {
        threshold: 128,
        turdSize: 2,
        alphaMax: 1,
        optCurve: true,
        optTolerance: 0.2,
        color: fg,
        background: bg,
      },
      (err, out) => (err ? reject(err) : resolve(out))
    );
  });
  writeFileSync(dst, svg);
  const kb = (svg.length / 1024).toFixed(1);
  console.log(`${dst}  (${kb} KB)`);
}
