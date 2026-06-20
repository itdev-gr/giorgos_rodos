# Image assets (`public/assets/img`)

Structured media for the Rhodes Rent a Boat site. Prefer placing new files in the folder that matches how the asset is used.

## Folder map

| Folder | Purpose |
|--------|---------|
| `brand/logos/` | SVG logos, favicon source |
| `brand/masks/` | Logo/menu background masks |
| `brand/social/` | OG images, social preview JPGs |
| `home/sections/` | Homepage section-only photos |
| `heroes/` | Homepage & service hero videos/stills (`heroes/services/` for service MP4s) |
| `locations/` | Rhodes bays, beaches, islands (Symi, Lindos, etc.) |
| `pages/about/` | About page images |
| `pages/blog/` | Blog thumbnails & inline images |
| `fleet/` | Yacht fleet photos (charter listings) |
| `cruises/` | Day cruise / Greco-style cruise photos |
| `tours/` | Tour card & listing images |
| `gallery/` | General yacht/lifestyle gallery (`gallery/yacht/` for reusable shots) |
| `charter/` | Charter region map images |
| `sailing/` | Dodecanese island photos (charter itineraries) |
| `operations/tender/` | Tender boat service |
| `operations/transfers/` | Transfer vehicles & routes |
| `operations/skipper/` | Skippered speedboat (Mako) |
| `operations/license-free/` | Self-drive rental boats |
| `ui/icons/` | Small SVG icons |
| `ui/shapes/` | Decorative PNG shapes |
| `ui/backgrounds/` | Widget/footer backgrounds |
| `ui/theme/` | Theme SVGs (404, map, etc.) |
| `ui/template/` | Unused template assets (safe to prune) |

## Naming

- Use **kebab-case**: `anthony-quinn-bay.jpg`
- Be descriptive: `rent-a-boat-jump.png` not `image1.jpeg`
- Service cards: prefer `locations/` or `cruises/` sources already in seed data

## Site root (not in this folder)

Favicons (`/favicon.ico`, `/favicon-32.png`, etc.) stay at `public/` root for browser defaults.
