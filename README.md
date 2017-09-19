# generator-nuxtjs  [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> generate a nuxtjs project that prerenders a multi-page site built using vue.js framework

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

## Getting To Know Yeoman
[Learn more about Yeoman.](http://yeoman.io/)



[travis-image]: https://travis-ci.org/kpace-usgs/generator-nuxtjs.svg?branch=master
[travis-url]: https://travis-ci.org/kpace-usgs/generator-nuxtjs
[daviddm-image]: https://david-dm.org/kpace-usgs/generator-nuxtjs.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/kpace-usgs/generator-nuxtjs
[coveralls-image]: https://coveralls.io/repos/github/kpace-usgs/generator-nuxtjs/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/kpace-usgs/generator-nuxtjs?branch=master
