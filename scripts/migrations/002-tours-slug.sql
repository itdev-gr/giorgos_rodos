-- Run this in the Supabase SQL editor.
-- Adds a slug column for SEO-friendly tour-detail URLs (replaces UUIDs).
--
-- Phase 1: nullable column + partial unique index
--   Existing rows have slug = NULL until backfilled. The partial unique index
--   ignores NULLs, so this is safe to apply with live data.
-- Phase 2 (after backfill): the application emits slug-based URLs and the
--   route falls back to UUID lookup with a 301 redirect for legacy URLs.

alter table public.tours
  add column if not exists slug text;

-- Partial unique index — allows NULL during migration, blocks duplicate slugs.
create unique index if not exists tours_slug_unique_idx
  on public.tours (slug)
  where slug is not null;

-- Plain lookup index for the route's slug-based query path.
create index if not exists tours_slug_idx
  on public.tours (slug);
