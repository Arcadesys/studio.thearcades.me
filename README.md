# The Arcades Studio

A blog and portfolio site built with Eleventy and Tailwind CSS, deployable to Vercel.

## Features

- Static site generation with Eleventy
- Responsive design with Tailwind CSS
- Blog with tagging system
- Easily deployable to Vercel

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

This will start the Eleventy development server and watch for changes to your Tailwind CSS files.

### Building for Production

To build the site for production:

```bash
npm run build
```

This will generate the static site in the `_site` directory.

### Deployment to Vercel

The site is configured for easy deployment to Vercel. Simply push to your repository and connect it to Vercel, or use the Vercel CLI:

```bash
vercel
```

## Project Structure

- `src/`: Source files
  - `_data/`: Global data files
  - `_includes/`: Partial templates
  - `_layouts/`: Layout templates
  - `blog/`: Blog posts
  - `css/`: CSS files
  - `img/`: Images
  - `js/`: JavaScript files
- `.eleventy.js`: Eleventy configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration
- `vercel.json`: Vercel deployment configuration

## License

ISC 