# vertragflow-ao

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_Jawo3Kac5LAOEefXhYrCSE2y33kf)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deployment to VPS (GitHub Actions)

This repo includes `.github/workflows/deploy.yml` and `scripts/deploy-vps.sh` to deploy on every push to `main` (and manual workflow dispatch).

### Required GitHub Secrets

- `SSH_HOST`: VPS hostname or IP
- `SSH_USER`: deploy user (for example `deploy`)
- `SSH_PRIVATE_KEY`: private key for the deploy user
- `SSH_PORT`: SSH port (usually `22`)
- `DEPLOY_PATH`: absolute deploy root (for example `/var/www/vertragflow.com`)
- `SSH_KNOWN_HOSTS`: output of `ssh-keyscan -p <port> <host>`
- `DEPLOY_RESTART_COMMAND` (optional): command to reload/restart app/web service (for example `sudo systemctl reload nginx` or `sudo systemctl restart vertragflow-web`)

The workflow fails fast if required secrets are missing.

### VPS Prerequisites

- Node.js 20+ and Corepack enabled
- `pnpm` available via Corepack
- Deploy path exists and is writable by `SSH_USER`
- A process manager or web server configured to serve from:
  - current release symlink: `<DEPLOY_PATH>/current`
  - release history: `<DEPLOY_PATH>/releases/<timestamp-sha>`

### First-time Setup

1. Create a dedicated deploy user and add its public key to `~/.ssh/authorized_keys`.
2. Create the deploy directory, for example:
   - `sudo mkdir -p /var/www/vertragflow.com`
   - `sudo chown -R deploy:deploy /var/www/vertragflow.com`
3. Add all required GitHub secrets.
4. Configure your service to run from `<DEPLOY_PATH>/current` (or update `DEPLOY_RESTART_COMMAND` to your process command).
5. Run the workflow once via **Actions → Deploy to VPS → Run workflow**.

### Rollback

Each deploy creates a release directory in `<DEPLOY_PATH>/releases`. To roll back, repoint `current`:

```bash
cd /var/www/vertragflow.com
ls -1 releases
ln -sfn releases/<previous-release-id> current
# then restart/reload your service
```

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.
