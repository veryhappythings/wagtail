module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'wagtail/wagtailadmin/static/wagtailadmin/js/vendor/jquery-1.10.3.js',
      'wagtail/wagtailadmin/static/wagtailadmin/js/vendor/jquery-ui-1.10.3.js',
      'wagtail/wagtailimages/static/wagtailimages/js/vendor/jquery.fileupload.js',
      'wagtail/wagtailimages/static/wagtailimages/js/vendor/jquery.fileupload-process.js',
      'wagtail/wagtailadmin/static/wagtailadmin/js/vendor/hallo.js',
      'wagtail/wagtailadmin/static/wagtailadmin/js/vendor/**/*.js',
      'wagtail/*/static/*/js/vendor/**/*.js',
      'wagtail/*/static/*/js/**/*.js',
      'wagtail/*/tests/js/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

