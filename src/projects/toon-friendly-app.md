---
title: Toon-Friendly Interface
subtitle: A cross-reality UI designed for both toons and humans in Clampett City
date: 2023-05-20
tags:
  - project
  - ui
  - animation
  - accessibility
technologies:
  - React
  - Three.js
  - GSAP
  - TailwindCSS
  - Accessibility API
liveUrl: https://toon-friendly.thearcades.me
repoUrl: https://github.com/arcades/toon-friendly-ui
icon: /img/avatar/cartoon-cat.svg
images:
  - /img/projects/toon-ui-1.jpg
  - /img/projects/toon-ui-2.jpg
---

The Toon-Friendly Interface is a cross-reality UI framework designed specifically for the unique needs of Clampett City, where toons and humans coexist. This project addresses the challenges of creating interfaces that work well for both populations, considering the different physical capabilities and perceptual systems of toons.

## How It Was Made

I built this interface using React for the component structure, Three.js for 3D elements that appeal to toons' spatial perception, and GSAP for the exaggerated animations that toons respond well to. The entire system is built with accessibility in mind, ensuring that both humans and toons of all abilities can use it effectively.

### Key Features

- **Exaggerated Animation Options**: Toons perceive motion differently than humans, so the interface includes animation settings that can be adjusted based on user preference.
- **Spatial UI Elements**: Leverages toons' unique ability to interact with seemingly 3D elements on 2D screens.
- **Adaptive Color Schemes**: Toons often see a wider color spectrum, so the interface includes color modes optimized for different visual systems.
- **Physics-Defying Interactions**: Special interaction patterns for toon users who aren't bound by the same physical constraints as humans.
- **Accessibility Features**: Voice commands, gesture recognition, and compatibility with toon-specific input devices.

### Development Process

The development process was uniquely challenging due to the need to cater to two very different user populations:

1. **Research Phase**: I conducted extensive interviews with both toon and human users to understand their different needs and preferences.
2. **Prototyping**: Created paper prototypes and tested them with both populations, iterating based on feedback.
3. **Technical Implementation**: Built the core framework using React, with Three.js for 3D elements and GSAP for animations.
4. **Accessibility Integration**: Implemented comprehensive accessibility features for both toons and humans.
5. **User Testing**: Conducted extensive testing with diverse users from both populations.
6. **Refinement**: Made adjustments based on user feedback, particularly focusing on the animation timing for toon users.

### Challenges and Solutions

The biggest challenge was balancing the needs of toon users, who often prefer exaggerated animations and non-realistic interactions, with human users who typically prefer more subtle and predictable interfaces. 

I solved this by creating an adaptive system that detects the user type (either explicitly through settings or implicitly through interaction patterns) and adjusts the interface accordingly. For example, buttons might bulge and make cartoon sound effects for toon users, while remaining more subtle for humans.

Another challenge was handling the different physical capabilities of toons, who can sometimes stretch, flatten, or otherwise defy physics in ways humans cannot. The solution was to create alternative interaction patterns that work for both populations.

## Conclusion

This project pushed the boundaries of inclusive design by considering the needs of a truly diverse user base. The techniques developed for this interface have applications beyond Clampett City, particularly for creating engaging interfaces for children, users with certain cognitive differences, and in educational contexts where engagement is paramount. 