module.exports = function(eleventyConfig) {
  // Add RSS plugin
  const pluginRss = require("@11ty/eleventy-plugin-rss");
  eleventyConfig.addPlugin(pluginRss);
  
  // Add custom shortcode for captioned images
  eleventyConfig.addShortcode("captionedImage", function(src, alt) {
    return `<figure class="my-8">
      <img src="${src}" 
           alt="${alt}" 
           class="w-full rounded-xl shadow-medium dark:shadow-dark-medium"
           loading="lazy"
           decoding="async">
      <figcaption class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400 italic">${alt}</figcaption>
    </figure>`;
  });
  
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Copy the `img` directory to the output
  eleventyConfig.addPassthroughCopy("src/img");
  
  // Copy the `js` directory to the output
  eleventyConfig.addPassthroughCopy("src/js");

  // Watch for changes to the CSS files
  eleventyConfig.addWatchTarget("src/css/");
  
  // Add BrowserSync configuration
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        bs.addMiddleware("*", (req, res) => {
          // 404 handling
          const content_404 = eleventyConfig.dir.output + "/404.html";
          const fs = require("fs");
          if (fs.existsSync(content_404)) {
            res.write(fs.readFileSync(content_404));
            res.writeHead(404);
          }
          res.end();
        });
      }
    },
    ui: false,
    ghostMode: false,
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function(snippet, match) {
          return snippet + match;
        }
      }
    }
  });
  
  // Add filters
  const filters = require('./src/_data/filters.js');
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });
  
  // Add filter to find related posts by tags
  eleventyConfig.addFilter("filter", function(array, callback) {
    return array.filter(callback);
  });
  
  // Add YouTube shortcode
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
  
  // Create a collection of all tags
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    const tagSet = new Set();
    collectionApi.getAll().forEach(item => {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        if (typeof tags === "string") {
          tags = [tags];
        }
        
        tags = tags.filter(tag => {
          return !["all", "nav", "post", "posts", "project", "projects"].includes(tag);
        });
        
        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });
    
    return [...tagSet].sort();
  });
  
  // Create a collection for projects
  eleventyConfig.addCollection("project", function(collectionApi) {
    return collectionApi.getFilteredByTag("project").sort((a, b) => {
      return b.date - a.date; // Sort by date in descending order
    });
  });
  
  // Create a collection for published posts (excluding future posts)
  eleventyConfig.addCollection("publishedPosts", function(collectionApi) {
    const now = new Date();
    
    return collectionApi.getFilteredByTag("post")
      .filter(post => {
        // Filter out posts with future dates
        return post.date <= now;
      })
      .sort((a, b) => {
        // Sort by date in descending order (newest first)
        return b.date - a.date;
      });
  });
  
  // Return your object options
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}; 