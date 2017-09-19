'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-nuxtjs:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../app'))
        .withPrompts({
        	bootstrap: 'Yes',
        	sitemap: 'Yes',
        	axios: 'Yes',
        	googleAnalytics: 'No',
        	dataViz: 'chart.js',
        	basename: '/projects/'
  		});
  });

  it('creates files', () => {
    assert.file([
      'package.json'
    ]);
  });

  it('inserts the correct libraries', () => {
    assert.fileContent([
    	['nuxt.config.js', '~/plugins/vue-chartjs.js'],
    	['nuxt.config.js', '@nuxtjs/axios'],
    	['nuxt.config.js', '@nuxtjs/sitemap'],
    	['package.json', '@nuxtjs/bootstrap-vue'],
    	['package.json', 'vue-chartjs'],
    	['package.json', '@nuxtjs/font-awesome'],
    ]);
  });
});
