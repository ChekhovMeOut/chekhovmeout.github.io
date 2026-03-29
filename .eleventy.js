const callouts = require('markdown-it-obsidian-callouts');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  
  eleventyConfig.addFilter("slugToTitle", function(slug) {
    return slug
      .replace(/[^a-zA-Z0-9\-_\s]/g, '')
      .replace(/[-_]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, c => c.toUpperCase());
  });

  eleventyConfig.addFilter("currentYear", function() {
  return new Date().getFullYear();
  });

  eleventyConfig.amendLibrary("md", mdLib => {
    mdLib.use(callouts);
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};