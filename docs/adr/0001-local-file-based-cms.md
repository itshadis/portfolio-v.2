# Local file-based content with a local-only admin UI

Portfolio content (CV Document, Experiences, Projects) lives in JSON files under `content/` and is edited through an admin UI at `/admin` that only runs in local development and writes those files via Node `fs`. There is no database, no auth, and no admin on the deployed site — publishing is `git commit` + `git push`.

## Considered Options

- **Git-based SaaS CMS (Decap, Tina)** — rejected: third-party dependency and OAuth setup for a single-owner site.
- **GitHub API as write storage, so `/admin` works on the deployed Netlify site** — rejected: requires a PAT secret, commit-per-save complexity, and API rate limits.
- **Password-gated admin** — rejected: admin exists only locally, so auth added friction without adding security.

## Consequences

- The deployed site (Netlify) is read-only: serverless `fs` writes are ephemeral, so content is snapshotted at build time and updates only on push.
- `/admin` and the write API routes are disabled outside development (`ADMIN_ENABLED=true` and `NODE_ENV !== 'production'`), so a deploy can never expose a half-working editor.
- A new content domain means adding a Content File, not running a migration.
