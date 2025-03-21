# Vision Simulator

A simple web-based simulator for demonstrating how central vision loss affects vision. This simulator creates a blurred area that follows the mouse cursor, simulating conditions like macular degeneration.

## Usage

There are two versions of the simulator:

1. **Full Page Version** (`index.html`): A complete standalone page with explanations.
2. **Embed Version** (`embed.html`): A minimal version designed to be embedded in iframes.

## Embedding in a Blog Post

To embed this simulator in your blog post, use the following iframe code:

```html
<iframe 
  src="/vision-simulator/embed.html" 
  width="100%" 
  height="400" 
  frameborder="0" 
  scrolling="no"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

You can adjust the height as needed to fit your blog layout.

## Features

- Adjustable blur size and intensity
- Four simulation types:
  - Macular Degeneration: Central vision obscured with normal peripheral vision
  - Simple Blur: Basic blurring effect where the cursor is
  - Distortion: Simulates warping and distortion
  - Dark Spot: Simulates a dark spot in central vision

## Customization

If you want to customize the text content for your blog post, edit the `embed.html` file. The important elements are:

- The `#content` div contains the text content
- The `#blur-overlay` div creates the blur effect
- The `.controls` div contains the adjustment sliders 