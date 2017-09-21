# generator-nuxtjs  [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> generate a [nuxtjs](https://nuxtjs.org) project that prerenders a multi-page site built using vue.js framework

## Installation

First, install [Yeoman](http://yeoman.io) and generator-nuxtjs using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
```

Then clone 'generator-nuxtjs' repo
```
git clone https://github.com/kpace-usgs/generator-nuxtjs.git
```

Create a link to the nuxtjs generator
```bash
cd generator-nuxtjs
npm install
npm link
```

Finally, create a folder for your app and run the generator 
```
cd ../path/to/your/project
mkdir nuxt-app
cd nuxt-app
yo nuxtjs
```
## Learn more about Vue
[Vue.js docs](https://vuejs.org)
[Intro for people who know jQuery](https://medium.freecodecamp.org/vue-js-introduction-for-people-who-know-just-enough-jquery-to-get-by-eab5aa193d77)

## Learn more about Nuxt
[Hello World](https://nuxtjs.org/examples)
[Pre-rendering vs server-side rendering](https://vuejsdevelopers.com/2017/04/01/vue-js-prerendering-node-laravel/)
[SEO info in nuxt pages](https://medium.com/@devlob/handling-server-side-rendering-and-seo-with-nuxt-js-fa8a2b0ae2ee)
[Add CMS to Nuxt.js](https://snipcart.com/blog/cockpit-cms-tutorial-nuxtjs)

## Getting To Know Yeoman
[Learn more about Yeoman.](http://yeoman.io/)



[travis-image]: https://travis-ci.org/kpace-usgs/generator-nuxtjs.svg?branch=master
[travis-url]: https://travis-ci.org/kpace-usgs/generator-nuxtjs
[daviddm-image]: https://david-dm.org/kpace-usgs/generator-nuxtjs.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/kpace-usgs/generator-nuxtjs
[coveralls-image]: https://coveralls.io/repos/github/kpace-usgs/generator-nuxtjs/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/kpace-usgs/generator-nuxtjs?branch=master
