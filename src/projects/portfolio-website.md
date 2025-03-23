---
layout: project.njk
title: Portfolio Website
subtitle: A modern, responsive portfolio built with Eleventy and TailwindCSS
date: 2023-03-15
tags:
  - project
  - web
  - eleventy
  - tailwindcss
technologies:
  - HTML
  - CSS
  - JavaScript
  - Eleventy
  - TailwindCSS
  - Nunjucks
liveUrl: https://thearcades.me
repoUrl: https://github.com/arcades/arcadeprofile
icon: /img/arcadesmescreenshot.jpg
---

My portfolio website showcases my projects, blog posts, and skills in a clean, modern design. Built with Eleventy and TailwindCSS, it features both light and dark modes, responsive design, and fast loading times.

## How It Was Made

I built this portfolio website using Eleventy as the static site generator, with TailwindCSS for styling. The site is designed to be fast, accessible, and easy to maintain.

### Key Features

- **Responsive Design**: The site looks great on all devices, from mobile phones to large desktop screens.
- **Dark/Light Mode**: Users can toggle between dark and light modes based on their preference.
- **Fast Loading**: Static site generation and optimized assets ensure quick page loads.
- **Blog Integration**: A fully-featured blog with tags, categories, and RSS feed.
- **Project Showcase**: Dedicated project pages with images, descriptions, and links.
- **Newsletter Subscription**: Integration with Mailchimp for newsletter subscriptions.

### Development Process

I started by sketching out the design and site structure, focusing on creating a clean, modern aesthetic that would showcase my work effectively. I chose Eleventy for its flexibility and performance, and TailwindCSS for its utility-first approach to styling.

The development process involved:

1. **Setting up the project structure** with Eleventy and configuring TailwindCSS
2. **Creating the base templates** and layouts using Nunjucks
3. **Implementing the responsive design** with TailwindCSS
4. **Building the blog functionality** with collections, tags, and pagination
5. **Creating the project showcase** with custom collections and templates
6. **Adding dark mode support** with TailwindCSS and JavaScript
7. **Optimizing for performance** with responsive images and asset optimization
8. **Implementing the newsletter subscription** with Mailchimp integration

### Challenges and Solutions

One of the main challenges was implementing the dark mode toggle without causing a flash of unstyled content. I solved this by storing the user's preference in localStorage and applying the theme before the page renders.

Another challenge was creating a flexible project showcase that could handle different types of projects with varying content and media. I solved this by creating a custom collection in Eleventy and using front matter to define project-specific data.

## Conclusion

Building this portfolio was a great opportunity to showcase my skills and learn new technologies. I'm particularly proud of the clean design, performance optimizations, and the seamless dark mode implementation. The site will continue to evolve as I add new projects and blog posts. 