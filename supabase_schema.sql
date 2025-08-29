-- Run this in your Supabase project's SQL editor

-- Profiles mirror auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text check (role in ('parent','staff','admin')) default 'parent'
);
alter table public.profiles enable row level security;

-- Children
create table if not exists public.children (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  dob date
);
alter table public.children enable row level security;

-- Parent-Child link (enrollments)
create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.profiles(id) on delete cascade,
  child_id uuid not null references public.children(id) on delete cascade,
  unique(parent_id, child_id)
);
alter table public.enrollments enable row level security;

-- Daily Reports
create table if not exists public.daily_reports (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references public.children(id) on delete cascade,
  author_id uuid references public.profiles(id) on delete set null,
  date date not null default current_date,
  summary text,
  activities text,
  meals text,
  nap text,
  notes text,
  inserted_at timestamp with time zone default now()
);
alter table public.daily_reports enable row level security;

-- Basic policies
-- Profiles: users can see themselves; staff/admin can see all
create policy "profiles self-view" on public.profiles
for select using (auth.uid() = id or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('staff','admin')));

-- Children: parents see their children via enrollments; staff/admin see all
create policy "children read" on public.children
for select using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('staff','admin'))
  or exists (select 1 from public.enrollments e where e.child_id = id and e.parent_id = auth.uid())
);

-- Enrollments: staff/admin view all; parents only see their links
create policy "enrollments read" on public.enrollments
for select using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('staff','admin'))
  or parent_id = auth.uid()
);

-- Daily reports: parents can read reports for their children; staff/admin can read all
create policy "reports read" on public.daily_reports
for select using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('staff','admin'))
  or exists (select 1 from public.enrollments e where e.child_id = daily_reports.child_id and e.parent_id = auth.uid())
);

-- Staff/Admin can insert reports; parents cannot
create policy "reports insert staff" on public.daily_reports
for insert with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('staff','admin')));

-- Views for convenience (parent-scoped)
create or replace view public.children_view_for_parent as
select c.*
from public.children c
join public.enrollments e on e.child_id = c.id
where e.parent_id = auth.uid();

create or replace view public.daily_reports_recent_for_parent as
select dr.*
from public.daily_reports dr
join public.enrollments e on e.child_id = dr.child_id
where e.parent_id = auth.uid()
order by date desc
limit 10;
