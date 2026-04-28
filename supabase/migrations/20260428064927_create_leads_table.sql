create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  team_size text,
  service_interest text,
  message text not null,
  source_page text not null,
  status text not null default 'new'
);

alter table public.leads enable row level security;

create policy "Service role full access on leads"
on public.leads
for all
to service_role
using (true)
with check (true);
