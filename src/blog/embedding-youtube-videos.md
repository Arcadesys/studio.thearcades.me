---
title: How to Embed YouTube Videos in Your Blog
description: Learn how to easily embed YouTube videos in your blog posts with custom styling that matches your site.
date: 2023-03-11
tags:
  - tutorials
  - web development
  - youtube
image: /img/youtube-embed-cover.jpg
---

# How to Embed YouTube Videos in Your Blog

YouTube videos can add a lot of value to your blog posts. They can demonstrate concepts, show tutorials, or simply entertain your readers. In this post, I'll show you how I've set up YouTube video embeds for this site.

## Using the YouTube Shortcode

I've created a custom shortcode that makes it super easy to embed YouTube videos in any blog post. The shortcode handles all the responsive styling and makes sure the video looks great on any device.

Here's an example of the shortcode in action:

{% youtube "dQw4w9WgXcQ", "Rick Astley - Never Gonna Give You Up" %}

## How to Use It

To embed a YouTube video in your Markdown files, simply use the `youtube` shortcode with the YouTube video ID:

```markdown
{% raw %}{% youtube "dQw4w9WgXcQ", "Rick Astley - Never Gonna Give You Up" %}{% endraw %}
```

The first parameter is the YouTube video ID, which you can find in the URL of the video. For example, in the URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ`.

The second parameter is optional and is the title of the video. If you don't provide a title, the video will be embedded without a caption.

## Starting at a Specific Time

You can also start the video at a specific time by adding a third parameter with the start time in seconds:

```markdown
{% raw %}{% youtube "dQw4w9WgXcQ", "Rick Astley - Never Gonna Give You Up (Starting at 0:30)", 30 %}{% endraw %}
```

This will start the video 30 seconds in:

{% youtube "dQw4w9WgXcQ", "Rick Astley - Never Gonna Give You Up (Starting at 0:30)", 30 %}

## Styling

The YouTube embeds are styled to match the rest of the site, with a nice card-like appearance that includes:

- Rounded corners
- A subtle shadow
- A hover effect with a blue border
- Responsive sizing that maintains the correct aspect ratio
- Dark mode support

## Technical Implementation

Behind the scenes, I'm using an Eleventy shortcode to generate the HTML for the YouTube embed. The shortcode is defined in the `.eleventy.js` file:

```javascript
eleventyConfig.addShortcode("youtube", function(id, title = "", startTime = 0) {
  const safeTitle = title || "YouTube video";
  return `<div class="youtube-embed bg-white/90 dark:bg-gray-800/90 p-4 rounded-xl shadow-medium dark:shadow-dark-medium border-2 border-transparent hover:border-arcades-blue dark:hover:border-blue-500 transition-all duration-300 mb-8">
    <div class="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
      <iframe 
        class="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/${id}${startTime > 0 ? `?start=${startTime}` : ''}"
        title="${safeTitle}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
    ${title ? `<div class="mt-4 text-center">
      <p class="text-lg font-medium text-gray-700 dark:text-gray-300">${title}</p>
    </div>` : ''}
  </div>`;
});
```

The CSS uses Tailwind classes to style the embed container and make it responsive.

## Conclusion

Adding YouTube videos to your blog posts is a great way to enhance your content and provide additional value to your readers. With this shortcode, it's easy to embed videos that look great and match the style of your site.

Try it out in your next blog post! 