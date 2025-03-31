---
layout: "post.njk"
title: "Doctor StrangeCode Part 4 - A Whole new World (of UX Design)"
date: "2025-03-24"
author: "Austen Tucker"
description: "I have no idea what I'm doing (but I'll figure it out as I go)"
image: "/img/blog/blindtabUI.jpg"
tags: 
    - post
    - ux
    - design
    - ai 
    - development
    - BlindTab
---


(Pictured: Claude's one-shot UX for https://blindtab.thearcades.me)

Sometimes, the best way to build something is to not have a plan at all. Or at least, that's what I told myself when I dove headfirst into this project. No roadmap, no specs, no meticulous Jira board tracking every micro-task—just me, a vague idea, and my ever-determined AI coworker, Claude.

Claude is like that one overenthusiastic teammate who's _so_ sure they understand what you want, even when they very much do not. It doesn't always get things right, but damn if it won't try its hardest. So, I figured: why fight it? Let's go full-on agile brain—embrace the chaos, iterate fast, and see where it takes us.

## **Step One: Start With a Sketch (and Vibes)**

I didn't start with a structured plan, just a rough sketch and some reference images. I fired those off to Claude with a simple prompt: "Make this make sense." To its credit, Claude didn't hesitate. It threw out a chunk of code, confident as ever.

![BlindTab Sketch](/img/blog/blindtabSketch.jpeg)

Was it good code?

Absolutely not.

But it was _something_. And that's all I needed. Because once you've got _something_, you can start shaping it into _something good._

## **The Loop: Keep It Tight, Keep It Moving**

Rather than trying to perfect things from the start, I focused on speed and feedback. Everything revolved around a tight development loop:

1. **Create a branch** – One idea at a time, no massive refactors, just small, digestible chunks.
2. **Make sure it works without side effects** – Because nothing derails momentum like breaking the entire project.
3. **Open a PR** – Even though I was working solo, treating each change like a mini-collaboration helped keep things clean.
4. **Let GitHub Actions do its magic** – Automate the boring parts so I could focus on the fun parts.

Rinse and repeat. No overthinking, no unnecessary friction—just pure iteration. If something sucked, I scrapped it. If something worked, I built on it. Simple.

## **TDD? Not Today, Satan**

Now, at this point, some of you might be wondering: "What about Test-Driven Development?"

And listen, I respect TDD. In a lot of scenarios, it makes sense. But this wasn't about producing a polished, production-ready masterpiece. This was a _vibe coding_ experiment. The goal was to keep the energy flowing, not slow things down with meticulous test writing.

Could I have done it? Sure.

Should I have done it? Absolutely.

Did I want to? **Absolutely not.**

If something broke, I'd fix it. If something was a mess, I'd refactor. If something made me cry, I'd go outside, touch grass, and try again.

## **AI as a Determined (but Slightly Chaotic) Coworker**

One of the most fascinating things about this experiment was watching how Claude handled ambiguity. When given a clear, specific task, it performed well. When given a broad, open-ended request, it confidently hallucinated nonsense. It was like watching a junior developer who just _really_ wants to be helpful, even when they have no idea what's going on.

But that's the thing—Claude is _determined._ Even when it messes up, it does so with complete conviction. And that's why this workflow worked so well:

- Claude could quickly generate code, giving me a rough starting point.
- I could tweak, refine, and guide it in the right direction.
- Together, we could iterate faster than if I had tried to do it all myself.

Was every solution perfect? Not even close. But the rapid feedback loop meant I never got stuck for long.

## **When It All Clicked**

At a certain point, something shifted. The feedback loop became effortless. Claude started understanding my style. I started anticipating its quirks. The project took shape faster than I expected. Frontend components that once took me days to implement were completed in under five minutes.

I became less a "coder" and more an "orchestrator" - conducting the AI bots' work while I focused on the flow and use cases for the app. Even though Claude is an AI, and I'm essentially giving tasks to code, thinking of Claude as a real team member has helped me let go of the reins a bit.

And the more I trusted Claude to take the first pass, the better my code quality got. It's better than my old style of coding - Stack Overflow Copypasta - by a large margin.

## Coding is fun again!

I think one of the things that surprised me most was how much _fun_ I was having doing development work. In the past, the tedium of chasing down semicolons and missing parens sapped the joy from any code I did manage to ship. But now that Claude does the heavy lifting, I'm doing more intentional thinking in the realms of architecture and design.

Like, take React. I _despise_ React. It's fussy, easy to break, but survives because it's marginally better than every other framework out there. Claude abstracted away all of the messy parameter-passing and component juggling that made React inscrutable to me. Now, with Claude taking the lead, I feel confident that I could write React if push came to shove.

(But I still wouldn't like it!)

Seriously, though. There's a weird joy in designing without overthinking. When you're not trying to make _the_ perfect thing, you can make _something_—and something is always better than nothing. The beauty of agile brain is trusting that clarity will come through action, not through excessive planning.

And sometimes, you just have to let your over-eager AI coworker take a swing at things. It might surprise you.