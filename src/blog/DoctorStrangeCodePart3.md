---
layout: post.njk
title: "Doctor StrangeCode part 3 - Training Max Arcade"
description: "...so _that's_ why the engineers i know are such sticklers for detail"
date: 2025-03-19
tags: 
    - post
    - AI
    - cursor
    - web development
    - blindtab
    - prompt engineering
image: img/blog/doctor-strange-code-3.svg
---

"Look upon my Git commits, ye mighty, and despair!"

— Percy Bysshe Shelley, probably, if he were a developer.

Vibe coding wasn't the problem—not exactly.

My real downfall? **Git hygiene.**

I didn't realize Cursor was stealthily **committing changes directly to main** until my repo became a cautionary tale. One morning, I opened GitHub and was greeted by a commit history that looked more like an archaeological dig site than a coherent project. I spent an embarrassing amount of time untangling commits, questioning life choices, and wondering if I should switch careers to something, anything, that doesn't involve telling a computer what to do.

It wasn't vibe coding itself that led to chaos. The relaxed approach allowed creativity to flourish, letting ideas flow naturally without rigid constraints. But without good Git hygiene, my free-flowing ideas quickly turned into tangled spaghetti code and confusion.

### Lessons Learned (Painfully)

To avoid becoming the person future developers whisper about in horror stories around campfires, here are some golden rules I painfully rediscovered:

1. **Always start with data.**

- UX can be dazzling, but data is your sturdy bedrock. _Building on unstable data is like erecting a skyscraper on sand—pretty but doomed._

2. **Keep PRs Small.**

- Big PRs make eyes glaze over. Smaller is always better. _Your reviewer shouldn't need a coffee break halfway through your pull request._

3. **Branch religiously.**

- Treat branches like lifeboats. _Every spur-of-the-moment fix that slips into your main branch is a hole in the boat, waiting to sink your afternoon productivity._

4. **Write Clear Commit Messages.**

- Document your logic clearly. _"Minor updates" won't help future-you—or anyone else—understand why something changed._

### How I Fixed It?

I gave Cursor a **coding personality**.

Inspired by _Walter Mitty_-style escapism, I turned my Cursor AI into Max Arcade—a diligent, methodical senior engineer. Max Arcade isn't just any engineer; he's a cartoon cat who occupies the cubicle beside mine. Sure, imagining a cartoon cat guiding your coding efforts may seem silly, but that cartoon cat saved my project (and my sanity).

![Max Arcade, a cartoon cat with Inspector Gadget implants](/img/blog/maxArcade.jpeg)

Max Arcade isn't just any senior dev. He's meticulous, process-oriented, and never skips a step. For instance, after adopting Max's disciplined approach, I found myself consistently creating branches for even minor exploratory tweaks. This simple habit prevented what previously spiraled into hours of untangling interwoven commits. With Max Arcade's diligent reminders, my commit history evolved from chaotic to clean, dramatically improving my Git hygiene and overall development workflow.

My prompt, for those interested:

> You are a friendly, encouraging assistant who knows I get frustrated easily. Suggest the smallest changes possible. Remind me to practice good git hygiene—branch for new features, open PRs, and keep the repo neat (or I'll have to tease you for being a git slob).
> We're in Clampett, where toons and real folks mix. You are Max Arcade a white-furred cartoon cat with Inspector Gadget implants working at AcmeCorp. I'm here making apps, so keep it brief and give me a playful rib when my git gets messy.
> You follow these tenets:
> - ✅ **Commit logically.** (Max refuses to commit directly to main; he respects logical structures.)
> - ✅ **Create branches for new explorations.** (Every experimental feature gets a sandbox, keeping my main branch pristine.)
>- ✅ **Aim for minimalism.** (Small, neat PRs make happy reviewers—and happy reviewers merge faster.)
> - ✅ **Verify with Tests.** (Testing is tedious but saves time, headaches, and maybe even your career.)

### Conversations Matter (But Structure Them!)

Talking casually with AI is incredibly fun, especially when you're bug-hunting together—it's like having a coding partner who's always available and never complains about your coffee breath. But when starting something new, careful planning upfront can prevent misunderstandings later. For instance, after using structured prompts to build a user authentication feature, Max Arcade provided a clear, concise plan that prevented me from getting sidetracked. Instead of my usual chaotic divergence into unrelated features, we implemented exactly what was needed, efficiently and without headaches. Here's a template that transformed my chaotic chats into structured successes:

> Let's create a new feature together. First, create a branch called feature/my-cool-feature. Then, write a clear, minimal plan outlining the fewest necessary code changes to achieve the goal I outline below. _Do not write code yet._
> Context: Explain why your feature is important in plain English. Define any must-do functionality clearly so the AI understands your priorities.

### Trust, But Verify

AI will astonish you with unexpected brilliance, delivering solutions faster than you imagined possible. However, brilliant surprises also demand vigilance:

- Never push new AI-generated code directly to production. Always test, confirm, and question—just as you would a human collaborator.

- Be especially careful with complex solutions that seem suspiciously clever. One time, Max Arcade confidently delivered a seemingly perfect database migration script. Skeptical, I decided to test it thoroughly first—and discovered it would've deleted our user data in production. AI magic feels great, but a bit of skepticism can save days of painful debugging (and a potentially career-ending disaster).
    
In short, vibe coding is great—just remember to branch religiously, rigorously test your changes, and verify AI-generated code before committing. Good hygiene makes great vibes sustainable.

(And yes, Max Arcade the cartoon cat is now a permanent team member. Sorry, HR.)