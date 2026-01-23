---
title: "Why I Built a Self-Doxing Website"
description: "A short story on why I decided to create a personal locating website public to the internet."
pubDate: 2026-01-23
author: "Jovaras Zigmantas"
---
## Background
During the early 2025 I thought that it would be a great idea to have a website which always shows my current location. Anyone who wants to find me, could just visit the website and see where I am at that moment. This idea came when I was trying to walk [100km around Vilnius](https://www.strava.com/activities/12534958321) Spoiler alert: I did not finish it. During the hike I was sharing my location with friends, if they wanted to join me for a part of the it. After a few km, one of my friends just showed up, he did not tell me beforehand, but I was even happier that way.

This made me think, why not my location be public at all times? If someone wants to find me, they can just look it up. Some time passed and I wanted to learn something new, so I decided to build this website.
Sorry to disappoint, but although the website is public, it does not share my location with everyone. All of the people have to sign in with Google and if whitelisted, they can access my location.

Want to see me? Go wild, visit with a very appropriate domain [https://kur.zigmantas.com](https://kur.zigmantas.com) ("kur" translating to "where." from Lithuanian).

## Technical Details

The website is built using [Next.js](https://nextjs.org/) framework, with [neon](https://neon.tech/) as a database to store the user data. [Drizzle](https://orm.drizzle.team/) is used as an ORM to interact with the database. [Better Auth](https://www.better-auth.com/) is used for authentication, with Google as the provider. The location data is fetched from my phone and sent to Home Assistant instance running on my home server. The server fetches the location data directly from Home Assistant API and serves it to the client. All of the API routes are protected with authentication middleware, so only authenticated users can access the data, this handled by [TRPC](https://trpc.io/). The requests are sent to the admin (me) via [Telegram Bot API](https://core.telegram.org/bots/api) whenever someone wants to be whitelisted and emails are sent via [Resend](https://resend.com/) service.