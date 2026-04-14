-- Run this in the Supabase SQL editor.
-- Adds a boolean flag used to pin admin-owned tours across every listings
-- category page and above non-admin tours.

alter table public.tours
  add column if not exists is_global boolean not null default false;

create index if not exists tours_is_global_idx
  on public.tours (is_global)
  where is_global = true;
