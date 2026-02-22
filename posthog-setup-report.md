<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DevEvent Next.js App Router application. The following changes were made:

- **`instrumentation-client.ts`** (new): Client-side PostHog initialization using the Next.js 15.3+ recommended approach. Configures PostHog with a reverse proxy (`/ingest`), error tracking (`capture_exceptions`), and debug mode in development.
- **`next.config.ts`** (updated): Added PostHog reverse proxy rewrites (`/ingest/static/:path*` and `/ingest/:path*`) and `skipTrailingSlashRedirect: true` to route analytics traffic through the Next.js app, improving ad-blocker resilience.
- **`components/ExploreBtn.tsx`** (updated): Converted to a proper named handler and added `posthog.capture('explore_events_clicked')` when the user clicks the hero CTA button.
- **`components/EventCard.tsx`** (updated): Added `'use client'` directive and `posthog.capture('event_card_clicked', { event_title, event_slug, event_location, event_date })` on link click to track which events users are most interested in.
- **`components/Navbar.tsx`** (updated): Added `'use client'` directive and `posthog.capture('navbar_link_clicked', { link_label })` on every navbar link to track navigation intent.
- **`.env.local`** (created/updated): Added `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables (never hardcoded in source files).

| Event Name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicked the "Explore Events" CTA button on the homepage hero section | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked on an event card to view event details; captures title, slug, location, and date | `components/EventCard.tsx` |
| `navbar_link_clicked` | User clicked a navigation link in the top navbar; captures which link label was clicked | `components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- 📊 **Dashboard — Analytics basics**: https://us.posthog.com/project/320370/dashboard/1298706
- 🔽 **Event Discovery Funnel (Explore → Click)**: https://us.posthog.com/project/320370/insights/xYiROfRu
- 👥 **Daily Active Users by Event Interactions**: https://us.posthog.com/project/320370/insights/Yhy8cLqV
- 🏆 **Most Popular Events (by clicks)**: https://us.posthog.com/project/320370/insights/C7NckhzH
- 🧭 **Navbar Navigation Breakdown**: https://us.posthog.com/project/320370/insights/xhStOUmQ
- 📈 **Total Event Interactions Over Time**: https://us.posthog.com/project/320370/insights/h2RKBLi3

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
