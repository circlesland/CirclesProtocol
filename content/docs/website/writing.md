---
description: ""
sidebar: "docs"
prev: "/website/intro/"
next: "/website/development/"
---

# Writing Content

## Edit on Github

Explain how to edit content on github

## Gridsome Config

We use the default `@gridsome/source-filesystem` plugin to look for `.md` files in the `content` folder to create pages.

```js
plugins: [
  {
    use: "@gridsome/source-filesystem",
    options: {
      // Change the option below.
      baseDir: "./content",
      path: "**/*.md",
      typeName: "MarkdownPage",
      remark: {
        externalLinksTarget: "_blank",
        externalLinksRel: ["noopener", "noreferrer"],
        plugins: ["@gridsome/remark-prismjs"],
      },
    },
  },
  // ...
];
```

If you have never worked with markdown, just search the internet for a guide. It is very simple to pick up.
