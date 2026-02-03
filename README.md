# Jovaras Zigmantas

Personal portfolio site with social media links.

## Development

```sh
bun install
bun dev
```

## Build

```sh
bun build
```

## Deploy to Cloudflare

```sh
bun run deploy
```

## Analytics Setup

This site uses **Cloudflare Web Analytics** for privacy-first, cookie-free analytics.

### Getting Your Analytics Token

1. Go to the [Cloudflare Web Analytics dashboard](https://dash.cloudflare.com/?to=/:account/web-analytics)
2. Click **Add a site**
3. Enter your hostname: `zigmantas.com`
4. Copy the token from the JS snippet provided
5. Create a `.env` file in the project root (use `.env.example` as a template)
6. Add your token:
   ```
   PUBLIC_CF_WEB_ANALYTICS_TOKEN=your_token_here
   ```

### What's Being Tracked

**Automatic tracking (via Cloudflare Web Analytics):**
- Page views and unique visitors
- Referrers and traffic sources
- Browser, device type, and operating system
- Geographic location (country)
- Core Web Vitals (LCP, FID, CLS)
- Page load times

**Enhanced tracking (via custom Analytics component):**
- Outbound link clicks
- Form submissions
- Time spent on page
- Scroll depth (25%, 50%, 75%, 100%)
- User engagement patterns

### Viewing Your Analytics

Access your analytics dashboard at:
https://dash.cloudflare.com/?to=/:account/web-analytics

Data updates in near real-time and provides insights into:
- Traffic trends over time
- Most popular pages
- Traffic sources and referrers
- Device and browser distribution
- Geographic visitor distribution
- Performance metrics

### Privacy & GDPR Compliance

Cloudflare Web Analytics is privacy-first and GDPR compliant:
- No cookies used
- No personal data collected
- No cross-site tracking
- Data is aggregated and anonymized

