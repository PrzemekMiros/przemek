const Image = require("@11ty/eleventy-img");
const sharp = require("sharp");
const { DateTime } = require("luxon");
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const codeStyleHooks = require("eleventy-plugin-code-style-hooks");
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

module.exports = function (eleventyConfig) {

  // Image plugin
  eleventyConfig.addNunjucksAsyncShortcode("Image", async (src, alt) => {
    if (!alt) {
      throw new Error(`Missing \`alt\` on myImage from: ${src}`);
    }

    let stats = await Image(src, {
      widths: [25, 320, 640, 960, 1200, 1800, 2400],
      formats: ["jpeg", "webp"],
      urlPath: "/assets/img/",
      outputDir: "./public/assets/img/",
    });

    let lowestSrc = stats["jpeg"][0];

    const srcset = Object.keys(stats).reduce(
      (acc, format) => ({
        ...acc,
        [format]: stats[format].reduce(
          (_acc, curr) => `${_acc} ${curr.srcset} ,`,
          ""
        ),
      }),
      {}
    );

    const placeholder = await sharp(lowestSrc.outputPath)
      .resize({ fit: sharp.fit.inside })
      .blur()
      .toBuffer();

    const base64Placeholder = `data:image/png;base64,${placeholder.toString(
      "base64"
    )}`;

    const source = `<source type="image/webp" data-srcset="${srcset["webp"]}" >`;

    const img = `<img
      class="lazy"
      alt="${alt}"
      src="${base64Placeholder}"
      data-src="${lowestSrc.url}"
      data-sizes='(min-width: 1024px) 1024px, 100vw'
      data-srcset="${srcset["jpeg"]}"
      width="${lowestSrc.width}"
      height="${lowestSrc.height}">`;

    return `<div class="image-wrapper"><picture> ${source} ${img} </picture></div>`;
  });

  eleventyConfig.addWatchTarget("./src/assets/sass/");
  eleventyConfig.addPassthroughCopy("./src/assets/css/");
  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy('./src/assets/js');
  eleventyConfig.addPassthroughCopy('./src/assets/fonts');
  eleventyConfig.addPassthroughCopy('./src/admin');

  // Code blocks
  eleventyConfig.addPlugin(codeStyleHooks, {
    colorPreviews: true,
    defaultLanguage: 'js',
    highlightSyntax: true,
    languageLabels: true,
    lineNumbers: true,
    markdownTrimTrailingNewline: true,
    prism: function(prism) {
      prism.languages.example = {
        tokenname: /\w+/i
      }
    },
    removeRedundancy: true,
    scripts: '/static/js/code-blocks.js',
    styles: '/static/css/prism.min.css'
  });

  // Minify plugin
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

  // Collections
  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/blog/**/*.md').reverse();
  });

  eleventyConfig.addCollection('realizacje', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/realizacje/**/*.md').reverse();
  });

  // Date
  eleventyConfig.addFilter("readablePostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
        zone: "Europe/Amsterdam",
    }).setLocale('pl').toLocaleString(DateTime.DATE_FULL);
});

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
        zone: "Europe/Amsterdam",
    }).setLocale('pl').toISODate();
});

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  eleventyConfig.addFilter('dateDisplay', require('./src/filters/date-display.js'));

  // Prev post
  eleventyConfig.addShortcode('previous', (collections, [tag], {inputPath}) => {
    const collec = collections[tag];
  
    for (let i = 0; i <= collec.length; i++) {
      if (collec[i+1] && collec[i+1].data.page.inputPath === inputPath) {
        return `<a href="${ collec[i].data.page.url }">Poprzedni</a>`;
      }
    }
  });
  
  // Next post
  eleventyConfig.addShortcode('next', (collections, [tag], {inputPath}) => {
    const collec = collections[tag];
  
    for (let i = 1; i <= collec.length-1; i++) {
      if (collec[i-1] && collec[i-1].data.page.inputPath === inputPath) {
        return `<a href="${ collec[i].data.page.url }">Kolejny</a>`;
      }
    }
  });

  // Lazy image
  eleventyConfig.addPlugin(lazyImagesPlugin);

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "includes",
    },
    markdownTemplateEngine: "njk",
  };
};
