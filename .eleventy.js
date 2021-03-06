module.exports = function (eleventyConfig) {
  // Copy the `imgs/` directory
  eleventyConfig.setFrontMatterParsingOptions({ excerpt: true });
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  return {
    jsDataFileSuffix: ".11tydata",
    dir: { input: "src" },
    passthroughFileCopy: true,
  };
};
