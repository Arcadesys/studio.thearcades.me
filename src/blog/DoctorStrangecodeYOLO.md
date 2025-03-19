---
layout: post.njk
title: Doctor StrangeCode Part 2 - YOLO Mode
description: No more FOMO, let's do this!! I unleashed Claude 3.7's awesome power on a blank codebase. What could go wrong?
date: 2024-03-17
tags:
  - post
  - AI
  - coding
  - YOLO
  - Claude
  - Cursor
  - BlindTab
image: /img/doctor-strange-code.svg
---

# Doctor StrangeCode Part 2 - YOLO Mode

### _No more FOMO, let's do this!!_

So there I was, playing it safe with Cursor, coding my weekend project BlindTab like a responsible adult. Methodical. Intentional. A _good_ engineer.

Then I found it.

Buried in the settings like some ancient forbidden relic: **YOLO mode.**
{% captionedImage "/img/blog/yolo.jpg", "They don't call it YOLO anymore, but it'll always be YOLO in my heart." %}

If you're unfamiliar, YOLO mode is Cursor's way of saying, _"Don't worry about it, bro, I got this."_ It generates code completely hands-off, with zero confirmations or safety nets.

Naturally, I thought: _"Why not let the AI do all the work while I sip coffee and watch?"_

I also thought: _"This will make for a hilarious blog post."_

So I mashed the YOLO button and set out on the strangest journey of my software engineering career.

---

## Why Did I Build BlindTab?

Before we get into the carnage, I should probably explain what I was trying to build. BlindTab is my attempt at a leadsheet viewing app that actually works for blind and low-vision users—something that isn't an overpriced, bolted-on accessibility nightmare. (No joke, there's a company that charges [1300 dollars](https://dancingdots.com/limelighter/limelightermain.htm) for a specialised tablet like this.)

I wanted an app that was simple, readable, and didn't require me to fight the UI like it owed me money.

So instead of doing the _normal_ thing—planning, writing a spec, carefully designing the architecture—I decided: _Nah, let's just YOLO code this entire thing and see what happens._

---

## What Does YOLO Mode Do?

YOLO mode takes your idea, shrugs, and _just does it_. No asking for approval, no "Are you sure?" pop-ups. Just raw, unfiltered, AI-powered chaos.

I knew this was a bad idea.

I did it **because** it was a bad idea.

That, and I'm a glutton for punishment.

---

## First Impressions: "I'm Cooked."

I typed in my little prompt, went to make some tea, and came back to a **shockingly good** prototype.

Like, _"Am I a 10x engineer now?"_ good.

> **Prompt:**  
> _You are a fellow engineer, helping me build an application for a blind person. This person has low vision and needs a lead sheet display tool that shows plain lead sheets in the largest font possible._

Fifteen minutes later, I had a working project. Databases set up. Routing established. UI laid out.

I felt like a coding god.

{% captionedImage "/img/blog/blindtab-prototype.png", "BlindTab prototype screenshot" %}

(You may notice that the prototype doesn't have data. We'll come back to that tomorrow.)

Satisfied and more than a little confident, I tried to make a pull request and realized, to my horror, that I had created a **5,000-line** monster.

_And that was only the beginning._

---

## The Slow, Inevitable Collapse

I should've known it was too good to be true.

At first, I guided the AI, trying to keep my feature requests small. But then I got cocky. I let it run wild. I started stacking features like I was ordering a sandwich at Subway.

By the time I took a step back to assess the damage, YOLO mode had:

- Changed my project from Vercel to Vite—_randomly._
- Implemented **five different database solutions.**
- Tried to **expose my env variables** to the repo. (I stopped it just in time.)
- Built an absurdly complex CI/CD pipeline for what was, at its heart, a **fancy text editor with a serverless backend.**

And then, **the funniest part of all:**

### _The 20,000-Word Code Deletion._

That's right. After hours of riding the vibe-coding high, I had to **delete everything.**

Control + A. Delete.  
Commit message: **"lmao"**

The final lesson? YOLO coding is fun, but if you don't guide the AI, you're in for a _world_ of hurt!

---

## What Did I Learn?

Even with AI, **you still need to bring your own structure and ideas.** YOLO mode can do the heavy lifting, but if you don't guide it, you're just watching it sprint full-speed into a brick wall.

I had to learn that lesson the hard way.

Well, technically, I didn't _have_ to, but at least it was funny.

In Part 3, we're going to do a little retrospective on how this failed so spectacularly. Then, we'll make some adjustments to our approach with a `fresh-mvp-refactor` and an engineer's mindset.

Stay tuned!