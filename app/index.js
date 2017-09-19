'use strict'

// require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends yeoman {
  constructor(args, opts){
    // must call the super constructor
    super(args, opts);

    this.argument('appName', {type: String, required: false });
    this.argument('bootstrap', {type: String, required: false});
    this.argument('dataViz', {type: String, required: false});
    this.argument('googleAnalytics', {type: String, required: false});
    this.argument('UA', {type: String, required: false});
    this.argument('axios', {type: String, required: false});
    this.argument('sitemap', {type: String, required: false});
    this.argument('basename', {type: String, required: false})
  }

  initializing(){
    this.on('end', function() {
      if (!this.options['skip-install']) {
           this.installDependencies({
             callback : function(){
               this.emit('depsInstalled');
             }.bind(this)
           });
        }
    });

    this.on('depsInstalled', function() {
      // can do something here
    }.bind(this));
  }
  // configurations will be loaded here
  //Ask for user input
  prompting() {
    this.log(chalk.blue('Welcome!'));

    if ((this.options.env.cwd).indexOf('generator-wim') != -1) {
        this.log(chalk.yellow('hey it looks like you are trying to generate an app in the generator-wim repo. Pick a different directory, please.'));
        return;
      }

      this.log(yosay(chalk.blue('You\'re using the California Water Science Center\'s Nuxt.js generator.')));

      //check for command line arguments
        if ((!this.options.appName) && (!this.options.mappingAPI) && (!this.options.mappingFlavor) && (!this.options.buildSystem)) {
          return this.prompt([{
            type    : 'input',
            name: 'appName',
            message: 'What\'s the name of the website you\'re building?',
            default: 'New site'
          }, 
          {
            type: 'list',
            name: 'bootstrap',
            message: 'Do you want to use bootstrap?',
            choices: [
              'Yes', 'No'
            ],
            default: 'No'
          },
        
          {
            type: 'list',
            name: 'dataViz',
            message: 'What data viz library do you want to use?',
            choices: [
              'chart.js', 'highcharts', 'leaflet', 'none'
            ],
            default: 'none',
          
          },
          {
            type: 'list',
            name: 'googleAnalytics',
            message: 'Include Google Analytics?',
            choices: [
              'Yes', 'No'
            ],
            default: 'No'
          },{
            type: 'input',
            name: 'UA',
            message: 'What is your Google Analytics ID?',
            when: function(answers) {
              return answers.googleAnalytics == 'Yes'
            }
          },{
            type: 'list',
            name: 'axios',
            message: 'Include Axios.js?',
            choices: [
            'Yes', 'No'],
            default: 'No'
          },{
            type: 'list',
            name: 'sitemap',
            message: 'build a sitemap?',
            choices: ['Yes', 'No'],
            default: 'No'
          }, {
            type: 'input',
            name: 'basename',
            message: 'what is the path that the dist folder will live on your server? note: manually change this entry in the nuxt.config.js file before building for production',
            default: '/'
          }]).then((answers) => {
            this.appName = answers.appName;
            this.bootstrap = answers.bootstrap;
            this.sitemap = answers.sitemap;
            this.googleAnalytics = answers.googleAnalytics;
            this.UA = answers.UA;
            this.dataViz = answers.dataViz;
            this.axios = answers.axios;
            this.basename = answers.basename;
          });
        }
        else {
          this.appName = this.options.appName;
          this.bootstrap = this.options.bootstrap;
          this.sitemap = this.options.sitemap;
          this.googleAnalytics = this.options.googleAnalytics;
          this.UA = this.options.UA;
          this.dataViz = this.options.dataViz;
          this.axios = this.options.axios;
          this.basename = this.options.basename;
        }
    }

  // writing logic here
  writing() {

    this.generatorPkg = require('../package.json');

    this.appConfig = {
      generatorInfo: this.generatorPkg,
      appName: this.appName,
      bootstrap: this.bootstrap,
      sitemap: this.sitemap,
      googleAnalytics: this.googleAnalytics,
      UA: this.UA,
      axios: this.axios,
      dataViz: this.dataViz,
      basename: this.basename
    };

      //Copy the configuration files
    this.fs.copy(this.templatePath(), this.destinationPath(), { globOptions: { dot: true, ignore: ['**/package.json','**/nuxt.config.js']}});

    //then overwrite template files
    //this.fs.copyTpl(this.templatePath('src/index.html'), this.destinationPath('src/index.html'), this.appConfig);

    this.fs.copyTpl(
        this.templatePath('package.json'), this.destinationPath('package.json'), this.appConfig
    );

    this.fs.copyTpl(this.templatePath('nuxt.config.js'), this.destinationPath('nuxt.config.js'), this.appConfig);
  }
    
  //Install Dependencies
  install() {
    this.npmInstall();
  }

};
