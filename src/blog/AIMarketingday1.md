---
layout: post.njk
title: Shoestring Book Marketing for Dummies
subtitle: How AI Helped Me Reclaim My Creative Practice, One Byte at a Time
date: 2025-03-31
tags:
  - post
  - writing
  - AI
  - marketing
  - creativity
  - Two-Flat Cats
  - accessibility
---

# Shoestring Book Marketing for Dummies

## How AI Helped Me Reclaim My Creative Practice, One Byte at a Time

I used to be a low-tier author. That's not self-deprecation—that's the reality of trying to make it in indie publishing without support. I quit around 2015 because the sheer workload of publishing was crushing. Not the writing—I love the writing. But everything else? The marketing, the networking, the social media grind? It made art inaccessible to me. I had a career to focus on, and art took a backseat.

I never stopped writing, though. It's a compulsion. And now, in 2025, I'm finally ready to come back. I have a new novel on the market (_Two-Flat Cats_), but I'm facing the same old problem: even if I publish, I still don't have the time, energy, or accessibility tools to do the full indie grind. I can't afford to hire a social media manager. I'm blind, so many of the tools for art and promotion aren't even accessible to me. But I _can_ use AI.

So I got creative—and frankly, a little desperate. What I found was transformative.

## The Problem

I'm writing a book where people turn into cartoon characters.

(OK, you can laugh; that's part of the joke)

It's an absurdist romance about these cartoon characters learning to reconcile with their pasts, and it has a small but loyal following. I genuinely believe that with the right reach—and a marketing campaign that's both meta and sincere—I could expand that audience.

But here's the problem: I don't have the money or time to sink into the parts of publishing I _don't_ enjoy. The admin, the algorithms, the content calendars—none of that feels creative or accessible to me, especially as a blind author. Traditional indie publishing demands a kind of hustle that burns me out before I even hit "post."

That's where AI changes the game. It gives me a chance to create at scale, quickly and cheaply. It lets me build visual assets, brainstorm campaigns, and test ideas without having to hire a full team or spend hours I don't have. I didn't need to compromise—I just needed to create differently.

## Day One: The Vision

ChatGPT 4o's image generation tools were a "holy shit" moment for me.

Not only was the tool producing _incredible_ results, their user interface allowed all the tricks and customizations that I was already used to from the native ChatGPT interface. So I set about making a "Preset" - a way to tell Sora "always follow these instructions when generating an image" - that would put my readers in the world of my book.

I fed Sora an image and a summary of the book setting: "Cartoons, but in real life." I expected half-baked results, but, well.

<div class="image-carousel" role="region" aria-label="Generated AI artwork carousel" tabindex="0">
  <div class="carousel-controls">
    <button class="prev-btn" aria-label="Previous image" onclick="prevImage()" tabindex="0">←</button>
    <button class="next-btn" aria-label="Next image" onclick="nextImage()" tabindex="0">→</button>
  </div>
  <div class="carousel-track">
    <figure class="carousel-slide" role="group" aria-label="Image 1 of 6">
      <img src="/img/blog/aimarketing/Cheering at Drag Bar Remix Mar 31 2025.png" alt="A cartoon cat character cheering enthusiastically at a drag show, wearing glasses and a black jacket" />
      <figcaption>A cartoon cat enjoying a drag show - the kind of scene that makes Two-Flat Cats unique</figcaption>
    </figure>
    <figure class="carousel-slide" role="group" aria-label="Image 2 of 6">
      <img src="/img/blog/aimarketing/Cyberpunk City Cat Remix.png" alt="A cartoon cat in a futuristic cyberpunk city setting" />
      <figcaption>Our feline protagonist exploring a neon-lit future</figcaption>
    </figure>
    <figure class="carousel-slide" role="group" aria-label="Image 3 of 6">
      <img src="/img/blog/aimarketing/Toon Cat in Tavern Remix.png" alt="A cartoon cat character in a cozy tavern setting" />
      <figcaption>The cozy tavern scene - where reality meets fantasy</figcaption>
    </figure>
    <figure class="carousel-slide" role="group" aria-label="Image 4 of 6">
      <img src="/img/blog/aimarketing/Smiling Otter Enthusiast Remix.png" alt="A cheerful cartoon otter character" />
      <figcaption>Meet Otto - our enthusiastic otter side character</figcaption>
    </figure>
    <figure class="carousel-slide" role="group" aria-label="Image 5 of 6">
      <img src="/img/blog/aimarketing/Mermaid Swimming Remix Mar 31 2025.png" alt="A cartoon mermaid character swimming gracefully" />
      <figcaption>The magical underwater sequences came out beautifully</figcaption>
    </figure>
    <figure class="carousel-slide" role="group" aria-label="Image 6 of 6">
      <img src="/img/blog/aimarketing/Image Generation Remix Mar 30 2025.png" alt="An AI-generated cartoon character showcase" />
      <figcaption>A showcase of the various character styles we explored</figcaption>
    </figure>
  </div>
  <div class="carousel-status" role="status" aria-live="polite">
    Image 1 of 6
  </div>
</div>

<style>
.image-carousel {
  @apply relative bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-medium dark:shadow-dark-medium border-2 border-transparent hover:border-arcades-blue dark:hover:border-blue-500 transition-all duration-300 mb-8;
}

.carousel-controls {
  @apply flex justify-between items-center mb-4;
}

.carousel-controls button {
  @apply bg-arcades-blue text-white px-4 py-2 rounded-lg hover:bg-arcades-purple transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-arcades-purple focus:ring-offset-2;
}

.carousel-track {
  @apply relative overflow-hidden;
}

.carousel-slide {
  @apply opacity-0 absolute top-0 left-0 w-full transition-opacity duration-500;
}

.carousel-slide[aria-hidden="false"] {
  @apply opacity-100 relative;
}

.carousel-slide img {
  @apply w-full h-auto rounded-lg shadow-medium dark:shadow-dark-medium;
}

.carousel-slide figcaption {
  @apply mt-2 text-center text-sm text-gray-600 dark:text-gray-400 italic;
}

.carousel-status {
  @apply mt-4 text-center text-sm text-gray-600 dark:text-gray-400;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-slide {
    @apply transition-none;
  }
}
</style>

<script>
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const status = document.querySelector('.carousel-status');

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.setAttribute('aria-hidden', index !== currentSlide);
    if (index === currentSlide) {
      slide.removeAttribute('style');
    } else {
      slide.style.display = 'none';
    }
  });
  status.textContent = `Image ${currentSlide + 1} of ${slides.length}`;
}

function nextImage() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
}

function prevImage() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
}

document.addEventListener('DOMContentLoaded', () => {
  updateSlides();
  
  // Add keyboard navigation
  document.querySelector('.image-carousel').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    }
  });
});

// Auto-advance with respect for reduced motion preferences
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(nextImage, 5000);
}
</script>

(She's my "Utah Teapot" now. Check these variations!)

I wanted to bring readers into the world of _Two-Flat Cats_. Not just through words, but visually. I tinkered with Sora over the course of the day, adding and changing presets, until I landed on this "Ink and Paint Cartoon" preset.

Once this is on API I can write a simple page that does nothing but generate these pictures. There's one marketing campaign done and dusted.

But that's only the beginning. By the end of the day, I wasn't just thinking about a few images—I was storyboarding entire promotional scenes, envisioning how short clips, animated GIFs, and social media teasers could draw readers into my world. What began as "make an image" turned into "build a doorway."

## Learnings

- **Screw up as quickly as possible.** There's an old saying in Go-playing circles: "Lose your first fifty games of Go as soon as possible." Every failure is a step forward. The faster you make mistakes, the faster you find your rhythm.
    
- **Restart when needed.** If you end up in a weird place, don't hesitate to wipe the board and begin again. You can always start a new thread. And often, you should. Threads aren't sacred.
    
- **Break your ambitions down.** Turn big goals into small, fun bits that you _want_ to explore. You're not building a novel's entire launch funnel—you're just trying to make a cool GIF today.
    
- **Trust the AI.** More than you think you should. Especially when you're stuck. It's hard to admit, but this thing is _better at Googling than you are_. And it understands context faster than you'd expect.
    
- **Play.** The best insights come when you treat the process like tinkering, not testing. Get messy. Throw out half-finished ideas. Enjoy the chaos before you organize.
    
- **Document the good stuff.** When you stumble into something great, save it. Label it. You'll thank yourself later when it's time to scale or publish.
    

## ChatGPT plus user? See the early results for yourself.

https://sora.com/explore/presets?pid=preset_01jqpgpbsee65t81zg5ch9v6qv

This link will let you experiment with and remix my prompt. Think of it as a shortcut to your own version of Sora. Tinker, tweak, reskin. There's a lot of freedom here, and it's shockingly forgiving.

## Expand your ambitions.

The most important thing I learned on this journey was that the old limits no longer apply. Media that used to require weeks or years of time to learn to create can now be generated on a whim, and while the AI version is still inferior to human artistic collaboration, it's good enough for 80% of your needs.

For indie creators without time, budget, or connections, "good enough" means "it can ship." That's huge.

So I started thinking bigger. If I could generate these images, what else could I make? Could I prototype a book trailer? Could I mock up covers? Could I build an interactive site where fans create their own toons?

Turns out, yes. And I didn't need to be a developer or a designer to do it—I just needed to keep asking the AI.

Speaking of expanding ambitions, later this week I'll talk about VRChat, Vtubers, and chasing a market of cash-flush furries. Because let's be honest: they _get it_. And they might just be the audience I've been writing for all along.