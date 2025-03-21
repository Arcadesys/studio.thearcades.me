# Vision Simulator

A web-based tool to simulate different types of vision impairment, helping users understand how vision conditions affect perception.

## Features

- **Multiple Vision Simulations:**
  - Macular Degeneration: Blurs the central vision while peripheral vision remains intact
  - Advanced Macular Degeneration: Creates a darkened area in the center of vision
  - Retinitis Pigmentosa (RP): Simulates tunnel vision where only the center is visible

- **Adjustable Parameters:**
  - Size: Control the size of the affected area
  - Intensity: Adjust the severity of the vision impairment

- **Image Upload Support:**
  - View how vision impairments affect specific images
  - Provide an image URL via query parameter: `?img=https://example.com/image.jpg`
  - Or use the URL input field in the main interface

## How to Use

1. Move your cursor around the page to position the vision impairment simulation
2. Select different simulation types from the dropdown menu
3. Adjust the size and intensity using the sliders
4. To test with a specific image:
   - Append `?img=YOUR_IMAGE_URL` to the page URL
   - Or use the "Image URL" field in the controls section

## Embedding

You can embed this simulator in any website using an iframe:

```html
<iframe src="https://yourdomain.com/vision-simulator/embed.html" width="100%" height="500px" frameborder="0"></iframe>
```

To embed with a specific image:

```html
<iframe src="https://yourdomain.com/vision-simulator/embed.html?img=https://example.com/image.jpg" width="100%" height="500px" frameborder="0"></iframe>
```

## Educational Purpose

This simulator is designed for educational purposes to build empathy and understanding about different vision conditions. It provides simplified approximations of vision impairments and is not a medically accurate representation of these conditions. 