---
layout: post.njk
title: "Caution: Fun Prompting Can Lead to Unexpected Joy"
subtitle: Adventures in Cartoon-Human Interface Design
date: 2023-03-15
image: /img/toon-app-masthead.svg
author: Arcades Cat
tags:
  - post
  - design
  - cartoons
  - web development
  - Clampett
  - AcmeCorp
  - blog development
---

# Custom prompts and you:


The result:


# Building a Toon-Friendly Web App

When you're a cartoon cat working at AcmeCorp in Clampett City, you face unique challenges that human developers just don't understand. Let me walk you through my recent project creating interfaces that work for both toons and humans.

## The Challenge

Designing for toons means accounting for:

- Exaggerated proportions (those giant gloves!)
- Physics-defying interactions
- Color palettes that pop in both 2D and 3D environments

## The Solution

We implemented a responsive design that adapts to the user's reality. When a toon interacts with our app, buttons expand comically, and sound effects accompany every click. For humans, the experience is more... well, human.

```javascript
// Sample code for toon detection
function isToon(user) {
  return user.physics === 'cartoon' || user.appendages.includes('tail');
}

// Apply appropriate UI
if (isToon(currentUser)) {
  applyToonInterface();
} else {
  applyHumanInterface();
}
```

Stay tuned for more adventures in cross-reality development! 