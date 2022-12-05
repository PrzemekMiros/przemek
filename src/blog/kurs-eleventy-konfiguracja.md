---
layout: layouts/post.njk
title: Kurs Eleventy - Konfiguracja
description: Mini kurs z generatora stron statycznych
date: 2022-12-05T22:37:34.733Z
author: Przemek Miros
thumbnail: /assets/img/eleventy-kurs.jpg
tags:
  - Eleventy - kurs
---
Zacznij od utworzenia pliku konfiguracyjnego, nazwij go .eleventy.js. W pliku będzie konfiguracja generatora oraz pluginów, zaczniemy od podania ścieżek - do katalogu z plikami źródłowymi i katalogu na pliki wyjściowe.

```javascript
module.exports = function(eleventyConfig) {
  // Return your Object options:
  return {
    dir: {
      input: "views",
      output: "dist"
    }
  }
};
```