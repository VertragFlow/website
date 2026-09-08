#!/usr/bin/env bash
set -euo pipefail

required_vars=(
  SSH_HOST
  SSH_USER
  SSH_PRIVATE_KEY
  SSH_PORT
  DEPLOY_PATH
  SSH_KNOWN_HOSTS
)

missing=()
for key in "${required_vars[@]}"; do
  if [ -z "${!key:-}" ]; then
    missing+=("$key")
  fi
done

if [ "${#missing[@]}" -gt 0 ]; then
  echo "Missing required environment variables: ${missing[*]}" >&2
  exit 1
fi

deploy_root="${DEPLOY_PATH%/}"
release_id="$(date -u +%Y%m%d%H%M%S)-${GITHUB_SHA:-manual}"
releases_dir="$deploy_root/releases"
release_dir="$releases_dir/$release_id"
current_link="$deploy_root/current"

tmp_dir="$(mktemp -d)"
trap 'rm -rf "$tmp_dir"' EXIT

key_file="$tmp_dir/id_deploy"
known_hosts_file="$tmp_dir/known_hosts"

printf '%s\n' "$SSH_PRIVATE_KEY" > "$key_file"
printf '%s\n' "$SSH_KNOWN_HOSTS" > "$known_hosts_file"
chmod 600 "$key_file" "$known_hosts_file"

ssh_cmd=(
  ssh
  -i "$key_file"
  -p "$SSH_PORT"
  -o StrictHostKeyChecking=yes
  -o UserKnownHostsFile="$known_hosts_file"
)

rsync_ssh_cmd="ssh -i $key_file -p $SSH_PORT -o StrictHostKeyChecking=yes -o UserKnownHostsFile=$known_hosts_file"

"${ssh_cmd[@]}" "$SSH_USER@$SSH_HOST" "mkdir -p '$release_dir'"

rsync -az --delete \
  -e "$rsync_ssh_cmd" \
  .next \
  public \
  package.json \
  pnpm-lock.yaml \
  next.config.mjs \
  "$SSH_USER@$SSH_HOST:$release_dir/"

"${ssh_cmd[@]}" "$SSH_USER@$SSH_HOST" "cd '$release_dir' && corepack enable && pnpm install --prod --frozen-lockfile"
"${ssh_cmd[@]}" "$SSH_USER@$SSH_HOST" "ln -sfn '$release_dir' '$current_link'"

if [ -n "${DEPLOY_RESTART_COMMAND:-}" ]; then
  "${ssh_cmd[@]}" "$SSH_USER@$SSH_HOST" "$DEPLOY_RESTART_COMMAND"
fi

"${ssh_cmd[@]}" "$SSH_USER@$SSH_HOST" "ls -1dt '$releases_dir'/* 2>/dev/null | tail -n +6 | xargs -r rm -rf"

echo "Deployment complete: $release_id"
