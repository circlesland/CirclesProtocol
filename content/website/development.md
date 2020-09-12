---
description: ""
sidebar: "docs"
prev: "/website/writing/"
---

# Development

## Installation

To install this website locally you need to:

1. Clone the repository
2. Install the dependencies

To clone the repository simply run:

```bash
git clone https://github.com/omoearth/CirclesProtocol.git
```

After cloning the project, change to the project you just created.

```bash
cd CirclesProtocol
```

Now you only need to install the dependencies.

Using npm:

```bash
npm install
```

After all dependencies are installed you can now run `npm run develop` to start the development server!
After bootstrapping has finished, head to `http://localhost:8080` to view the site locally.

## Sidebar

In order to have a sidebar visible on the side of the page (like on this one for example) or on mobile devices as an off-canvas navigation, you are required to do some global configuration, as well as some configuration per markdown file.

### Global Configuration

Open the `gridsome.config.js`. The configuration for the sidebar is located under `settings > sidebar`.

```js
// gridsome.config.js
module.exports = {
  // ...
  settings: {
    sidebar: [],
  },
  // ...
};
```

Please note that the sidebar option is an array, since you can define multiple sidebars for different sections of your website. For example you might have a sidebar for your guide and another one for your Api reference.

### The Sidebar Config Object

A single item in this array needs to have the following properties:

- `name`: The identifier of the sidebar. This will be referenced in your markdown frontmatter.
- `sections`: The sidebar is divided into several sections. On this page we have **Getting Started** and **Configuration**

```js
// gridsome.config.js
module.exports = {
  // ...
  settings: {
    sidebar: [
      name: 'docs',
      sections: []
    ]
  },
  // ...
}
```

An item for the `sections` array might look like this:

```js
// gridsome.config.js
module.exports = {
  // ...
  settings: {
    sidebar: [
      name: 'docs',
      sections: [
        {
          title: 'Getting Started',
          items: [
            '/docs/',
            '/docs/installation/',
            '/docs/writing-content/',
          ]
        },
      ]
    ]
  },
  // ...
}
```

As you can see, we need a `title` for the sections, as well as an array of `items` which are the links to the given pages.

The sidebar performs a static query to get all pages. This is how we automatically put the title of the given page in the sidebar.

### Frontmatter setup

After your global configuration is all done, we only need to tell the markdown page which sidebar to use.

In order to do that we simply reference the `name` of the sidebar in our frontmatter:

```md
---
sidebar: "docs"
---

# I use the docs sidebar
```

### Sidebar Settings

The sidebar, unfortunately, is not generated automatically but rather configured in your frontmatter and the `gridsome.config.file`.
Check out the [sidebar](/docs/sidebar/) section for more information.

## Navigation

The standard navigation on the top left is defined in the `gridsome.config.js` file. The configuration is very simple. It just needs a `settings > nav` property which takes a `links` property that defines every link that should be displayed at the top.

```js
module.exports = {
  settings: {
    nav: {
      links: [{ path: "/docs/", title: "Docs" }],
    },
  },
};
```

### Previous and Next Links

If you scroll to the bottom of the page, you will notice some buttons which link to the previous pages in these docs. These are also not automatically generated but configured in the frontmatter of your markdown file like this:

```md
prev: '/docs/previous-link/'
next: '/docs/next-link/'
```

Just like the sidebar, you only need to specify the link to the page and the title will be fetched via a graphql query.

Each link item needs a `path` and a `title` for the link.

## Description

The description of each page goes to the frontmatter of said page. It is an optional value but is recommended since this value is used to fill some meta properties of your page.

```md
---
description: "your description"
---
```

## Social Links

At the top of the page, you can see some icons which link to Twitter/GitHub or personal website. These links are also defined in your `gridsome.config.js` like this:

```js

module.exports = {
  settings: {
    web: process.env.URL_WEB,
    twitter: process.env.URL_TWITTER,
    github: process.env.URL_GITHUB,
  }
```

By default these are defined in your `.env` file but can be hardcoded if you want to.

## On this Page

On the right side of the page is an overview of every headline of the current viewed page. Fortunately this list is auto-generated and you don't need to do anything.

## Google Analytics

Google Analytics is integrated via the `@gridsome/plugin-google-analytics` plugin. It needs your tracking id in order to work correctly, which can also be defined via `.env` file or hardcoded as needed.

If you don't want to use Google Analytics, simply delete this entry from your `plugins`.

Read more [here](https://gridsome.org/plugins/@gridsome/plugin-google-analytics).

```js
// ...
{
  use: '@gridsome/plugin-google-analytics',
  options: {
    id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
  }
}
// ...
```

## Deploying

Gridsome generates static files when running the `gridsome build` command. By default it outputs to the `dist` directory.
Since these are simple HTML and JS files you only need a server which hosts these files.

If you need more information on this topic, check out the [Gridsome Docs](https://gridsome.org/docs/deploy-to-netlify/) on this issue.
