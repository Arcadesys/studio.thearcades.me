---
layout: project.njk
title: BlindTab
subtitle: A proof-of-concept leadsheet viewer designed for users with low vision.
date: 2023-03-21
tags:
  - project
  - web
  - accessibility
  - low vision
  - blind
  - blindtab
technologies:
  - HTML
  - CSS
  - next.js
  - postgres
  - Vercel
  - Neon
  - Tailwind
liveUrl: https://blindtab.thearcades.me
repoUrl: https://github.com/arcades/blindtab
icon: /img/blog/blindtabUI.jpg
images:
  - /img/projects/portfolio-dark.jpg
  - /img/projects/portfolio-light.jpg
---

You ever wake up on a Friday morning and say, "Screw this, I'm done squinting at Ultimate Guitar"? That was me. I'd spent the better part of a year trying every tab reader, sheet music tool, and half-baked app out there. Nothing worked well with zoom, screen readers, or even just... my eyes. I'm low vision. I make it work. But none of these tools were built for someone like me.

So I said screw it. I'd make my own. I opened Cursor to hack together a prototype in a single weekend.

Originally, I thought this would be a static site—just HTML and CSS. A weekend's worth of work at least. But I wanted to save songs. I wanted to have them follow me between devices. I wanted to write tabs for friends. So I pulled in React.

At first, I could _swear_ this was magic. Within 10 minutes I had a working prototype of the application up and running on my network. I started thinking about my future as a 10x deevloper as I refined the UX, made it work for me.

The next day was chaos. I didn't know React. I didn't even really want to. But I knew what I needed. I got stuck a lot. Then I got unstuck. And stuck again.

After four false starts, I finally remembered the oldest rule in the book: start with the data.

Cue me deleting 20 hours of work in a single commit. Message: "LMAO."

Once I started again, the rest started to flow. Neon Serverless let me stand up a Postgres instance with zero effort. Vercel handled hosting like a champ. I used voice mode with Claude to work through blockers and draft user stories. I didn't have to spend time arguing with my own syntax.

By Day Three I had full CRUD for a songbook. By Day Five I had a working tab reader with auto-centering text. It was ugly as sin, but it worked. And it worked for me. That mattered.

I used it every day for a week on my iPad. Tested it. Broke it. Fixed it. Added keyboard shortcuts. Centered the lyrics better. Wired up a bluetooth page turner. Added quick song loading and automatic scroll anchoring. Each fix made it more fun to use.

The real "oh damn" moment was when I loaded up "Fake Plastic Trees" and played through the whole thing without ever squinting or losing my place, first time, no issues.

I'm not done. Right now, I'm still solo-tenant. I hardcoded database auth just to get things rolling. The next step is multi-user support—auth, private libraries, shared tabs. After that? Markdown import. Live chords. Maybe even a screen reader that cues blind musicians.

But the core idea remains: it's gotta work for me. And if it works for me, maybe it works for someone else, too.

Stay tuned.