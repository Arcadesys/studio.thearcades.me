module.exports = function(eleventyConfig) {
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Copy the `img` directory to the output
  eleventyConfig.addPassthroughCopy("src/img");
  
  // Copy the `js` directory to the output
  eleventyConfig.addPassthroughCopy("src/js");

  // Watch for changes to the CSS files
  eleventyConfig.addWatchTarget("src/css/");
  
  // Add filters
  const filters = require('./src/_data/filters.js');
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
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
          return !["all", "nav", "post", "posts"].includes(tag);
        });
        
        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });
    
    return [...tagSet].sort();
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