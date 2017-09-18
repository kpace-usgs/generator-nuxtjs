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
    this.argument('charting', {type: String, required: false});
    this.argument('chartingLib', {type: String, required: false})
    this.argument('mapping', {type: String, required: false});
    this.argument('googleAnalytics', {type: String, required: false});
    this.argument('axios', {type: String, required: false});
    this.argument('sitemap', {type: String, required: false})
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
            name: 'charting',
            message: 'Will this site include chart or graph data visualizations?',
            choices: [
              'Yes', 'No'
            ],
            default: 'No'
          },
          {
            type: 'list',
            name: 'chartingLib',
            message: 'What charting library do you want to use?',
            choices: [
              'chart.js', 'highcharts'
            ],
            //only ask this question if the mappingAPI is leaflet right now
            when: function(answers) {
              return answers.charting === 'Yes';
            }
          },{
            type: 'list',
            name: 'mapping',
            message: 'Will this site include leaflet.js maps?',
            choices: [
              'Yes', 'No'
            ],
            default: 'No'
          },{
            type: 'list',
            name: 'googleAnalytics',
            message: 'Include Google Analytics?',
            choices: [
              'Yes', 'No'
            ]
          },{
            type: 'list',
            name: 'axios',
            message: 'Include Axios.js?'
            choices: [
            'Yes', 'No'],
            default: 'No'
          },{
            type: 'list',
            name: 'sitemap',
            message: 'build a sitemap?',
            choices: ['Yes', 'No'],
            default: 'No'
          }]).then((answers) => {
            this.appName = answers.appName;
            this.bootstrap = answers.bootstrap;
            this.sitemap = answers.sitemap;
            this.googleAnalytics = answers.googleAnalytics;
            this.mapping = answers.mapping;
            this.chartingLib = answers.chartingLib;
            this.charting = answers.charting;
            this.axios = answers.axios;
          });
        }
        else {
          this.appName = this.options.appName;
          this.bootstrap = this.options.bootstrap;
          this.sitemap = this.options.sitemap;
          this.googleAnalytics = this.options.googleAnalytics;
          this.mapping = this.options.mapping;
          this.chartingLib = this.options.chartingLib;
          this.charting = this.options.charting;
          this.axios = this.options.axios;
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
      axios: this.axios,
      mapping: this.mapping,
      chartingLib: this.chartingLib,
      charting: this.charting
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
