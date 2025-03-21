# Vision Simulator

A simple web-based simulator for demonstrating different types of vision loss. This simulator creates visual effects that follow the mouse cursor, allowing users to experience various vision impairments.

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

- Adjustable size and intensity
- Five simulation types:
  - Macular Degeneration: Simulates a blurred area in central vision
  - Retinitis Pigmentosa: Simulates tunnel vision (only able to see around cursor)
  - Simple Blur: Basic blurring effect where the cursor is
  - Distortion: Simulates warping and distortion
  - Dark Spot: Simulates a dark spot in central vision

## How it Works

This simulator uses different visual effects to simulate various vision conditions:

1. **Macular Degeneration**: Creates a semi-transparent overlay that follows the user's cursor and is blurred to simulate how central vision might be affected, while peripheral vision remains intact.

2. **Retinitis Pigmentosa**: The opposite effect of macular degeneration - a dark overlay covers the entire screen, with only a small area around the cursor visible, simulating the "tunnel vision" experienced by people with RP.

3. **Other Effects**: Various combinations of blur, darkness, and distortion to represent different vision conditions.

## Customization

If you want to customize the text content for your blog post, edit the `embed.html` file. The important elements are:

- The `#content` div contains the text content
- The `#blur-overlay` and `#rp-vision` divs create the vision effects
- The `.controls` div contains the adjustment sliders 