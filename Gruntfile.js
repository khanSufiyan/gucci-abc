var path = require('path');

var lessDir = 'assets/less';
var rendrDir = 'node_modules/rendr';
var rendrHandlebarsDir = 'node_modules/rendr-handlebars';
var rendrModulesDir = rendrDir + '/node_modules';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    handlebars: {
      compile: {
        options: {
          namespace: false,
          commonjs: true,
          processName: function(filename) {
            return filename.replace('app/templates/', '').replace('.hbs', '');
          }
        },
        src: "app/templates/**/*.hbs",
        dest: "app/templates/compiledTemplates.js",
        filter: function(filepath) {
          var filename = path.basename(filepath);
          // Exclude files that begin with '__' from being sent to the client,
          // i.e. __layout.hbs.
          return filename.slice(0, 2) !== '__';
        }
      }
    },

    less: {
      development: {
        options: {
          paths: ['assets/less']
        },
        files: {
          'public/css/main.css': 'assets/less/main.less',
        }
      }
    },

    watch: {
      scripts: {
        files: 'app/**/*.js',
        tasks: ['browserify'],
        options: {
          interrupt: true
        }
      },
      templates: {
        files: 'app/**/*.hbs',
        tasks: ['handlebars'],
        options: {
          interrupt: true
        }
      },
      less: {
        files: [ 'assets/less/*.less', 'assets/less/**/*.less' ],
        tasks: [ 'less' ],
        options: {
          interrupt: true
        }
      }
    },

    concat: {
      vendor: {
        src: [
          'assets/vendor/modernizr-custom.js',
          'assets/vendor/jquery-2.2.4.js',
          'assets/vendor/bootstrap.js',
          'assets/vendor/video.js',
        ],
        dest: 'public/js/vendor.js',
      }
    },

    concat_css: {
      options: {
        // Task-specific options go here.
      },
      all: {
        src: ["assets/css/vendor/*.css"],
        dest: "public/css/vendor.css"
      },
    },

   browserify: {
      options: {
        debug: true,
        alias: [
          'node_modules/rendr-handlebars/index.js:rendr-handlebars'
        ],
        aliasMappings: [{
          cwd: 'app/',
          src: [ '**/*.js' ],
          dest: 'app/'
        }],
        external: [ 'jquery' ]
      },
      app: {
        src: [
          'app/**/*.js'
        ],
        dest: 'public/js/main.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('runNode', function () {
    grunt.util.spawn({
      cmd: 'node',
      args: ['./node_modules/nodemon/bin/nodemon.js', 'index.js'],
      opts: {
        stdio: 'inherit'
      }
    }, function () {
      grunt.fail.fatal(new Error("nodemon quit"));
    });
  });

  grunt.registerTask('compile', [ 'handlebars', 'concat', 'browserify', 'less', 'concat_css' ]);
  grunt.registerTask('dev', [ 'handlebars', 'browserify']);

  // Run the server and watch for file changes
  grunt.registerTask('server', [ 'handlebars', 'runNode', 'watch']);

  // Default task(s).
  grunt.registerTask('default', [ 'compile' ]);
};
