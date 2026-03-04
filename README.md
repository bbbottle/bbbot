A telegram [bot](https://t.me/BBKingsBot) used to update my [website](https://bbki.ng).

## Cloudflare Workers deployment

### 1) Create KV
Create a KV namespace and update the IDs in [wrangler.toml](wrangler.toml).

### 2) Configure secrets
Set these Worker secrets:

- BOT_TOKEN
- ADMIN_ID
- ADMIN_EMAIL
- SUPABASE_URL
- SUPABASE_ANNO_KEY
- SITE_URL
- WEBHOOK_SECRET

### 3) Deploy
Deploy the Worker and note the URL.

### 4) Set Telegram webhook
Set the webhook to:

```
https://<your-worker-domain>/telegram/<WEBHOOK_SECRET>
```

### 5) Local dev
Use Wrangler to run locally and set the same secrets in the dev environment.
