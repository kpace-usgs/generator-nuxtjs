# usgs-nuxt

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate

<!-- for a single-page application, server-side rendered:
# build for production and launch server
$ npm run build
$ npm start -->


```

## Pages and templates
Nuxt builds out multiple pages following the file structure in the pages folder.
Tell each page which layout template (in the layouts folder) to use.
[nuxt.js docs](https://nuxtjs.org/guide/views#layouts)

## Assets
Put static assets (e.g. images) in static folder. Put any assets that should be compiled (e.g. javascript files) in the assets folder.


## Plugins
Because nuxt.js creates isomorphic apps, any libraries that can only be used in the browser should be connected to the app through the [plugins array](https://nuxtjs.org/guide/plugins) or the [modules array](https://github.com/nuxt-community/modules) in nuxt.config.js
```
plugins: [
	'~/plugins/libraryName.js'
],
modules: [
	'@nuxtjs/font-awesome',
	['@nuxtjs/bootstrap-vue', { css: false }]
]
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
