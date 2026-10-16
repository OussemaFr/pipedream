# Overview

[SocialAPIs](https://socialapis.io) returns public Facebook and Instagram data as JSON: pages, posts, comments, groups, photo albums, the Meta Ads Library, Marketplace, Instagram profiles, posts, reels and locations. No Meta developer app or OAuth is needed, only an API key.

# Example use cases

- **Competitor ad monitoring:** search the Meta Ads Library for a brand every morning and post new ads to Slack.
- **Social listening:** pull a page's latest posts and their comments into a spreadsheet or database.
- **Influencer research:** look up Instagram profiles and recent posts, and enrich a CRM with follower counts.

# Getting started

1. Sign up at [socialapis.io](https://socialapis.io) (the free plan includes 200 credits a month, no card).
2. Copy your API key from the [dashboard](https://socialapis.io/dashboard).
3. Connect the SocialAPIs app in Pipedream and paste the key.

# Troubleshooting

- **401:** the API key is missing or wrong.
- **403:** the account is out of credits or paused. Use **Get Account Usage** (free) to check.
- **429:** rate limit for your plan. Retry later.
- **502 / 504:** the data source failed or timed out. Failed calls aren't charged; retry once.
