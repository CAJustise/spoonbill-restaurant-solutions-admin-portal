# SRS Admin Portal Template

Reusable BOH/operations portal core for restaurant projects.

## Included Modules

- Nest dashboard (labor + reservations + tasks + 86 board)
- Menu Management
- Reservations (dining, events/parties, classes)
- TEAM / Workforce
- Operations content tools
- Career Management
- Investment
- Business Settings + logo branding

## Local Run

```bash
npm ci
npm run dev
```

App entry:

- `/admin/login`

Default local admin login:

- Email: `admin@srs.local`
- Password: `srs-admin`

## Reuse For New Projects

1. Create a new repo from this one (or clone/copy it).
2. Update branding in `Settings`:
   - Business type
   - Business name
   - Address/phone
   - Admin logo
3. Keep the BOH module structure and customize menu/reservation/workforce content.
4. Deploy to GitHub Pages.

## GitHub Pages Base Path

Vite base path is auto-derived from `GITHUB_REPOSITORY`, so this repo works when renamed or copied to a new repository.
For example, if the repo is named `SRS-admin-portal`, the admin URL becomes `/SRS-admin-portal/admin`.

## Optional Remote Supabase Mode

This project defaults to local data (no Supabase required).  
If you want remote Supabase later, copy `.env.example` to `.env` and set:

- `VITE_USE_REMOTE_SUPABASE=true`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_SUPABASE_SERVICE_ROLE_KEY`
