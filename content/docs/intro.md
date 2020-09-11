---
description: ''
sidebar: 'docs'
next: '/docs/installation/'
---

# Intro
To contribute to this website, whitepaper and / or blog checkout Gridsome and the following introduction.

Gridsome is a static site generator, which outputs plain html files and has other great features like image processing and lazy-loading. After Serving the initial html, Gridsome site turn into a snappy single page application.

## Navigation

This website has support for an organized sidebar fore cross-page navigation as well as an automatic generated table of contents for each page in our documentation.

## Search

The search component which is shipped with this theme, automatically indexes all headlines in your markdown pages and provides instant client side search powered by [Fuse.js](https://fusejs.io/).

## TailwindCSS

This starter uses [TailwindCSS](https://tailwindcss.com/) for layout and styling. You can easily configure it by editing the `tailwind.config.js` file. [PurgeCSS](https://purgecss.com/) is included as well to keep the bundle size as low as possible and the website fast and snappy!

### Changing Colors

The most inportant colors are defined in the `src/layouts/Default.vue` file at the top of the `style` block via CSS variables. If you want to change the primary color to orange for example, you would simply touch that value there.

```css
:root {
  --color-ui-primary: theme('colors.orange.600');
}
```

### Contribute

If you find any spelling mistakes or have improvements to offer, we welcome anyone who has ideas and wants to contribute to the core protocol.