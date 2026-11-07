module.exports = function(eleventyConfig) {
  // Copie automatique du dossier images vers _site/images
  eleventyConfig.addPassthroughCopy({ "content/images": "images" });

  eleventyConfig.addCollection("vignettes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/vignettes/*.md").sort((a, b) => {
      return (a.data.order || 99) - (b.data.order || 99);
    });
  });

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      output: "_site"
    }
  };
};
