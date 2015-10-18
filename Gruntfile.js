// AdminLTE Gruntfile
module.exports = function (grunt) {

  'use strict';

  grunt.initConfig({
    watch: {
      // If any .less file changes in directory "public/build/less/" run the "less"-task.
      files: ["public/build/less/*.less", "public/build/less/skins/*.less", "public/dist/js/app.js"],
      tasks: ["less", "uglify"]
    },
    // "less"-task configuration
    // This task will compile all less files upon saving to create both AdminLTE.css and AdminLTE.min.css
    less: {
      // Development not compressed
      development: {
        options: {
          // Whether to compress or not
          compress: false
        },
        files: {
          // compilation.css  :  source.less
          "public/dist/css/AdminLTE.css": "public/build/less/AdminLTE.less",
          //Non minified skin files
          "public/dist/css/skins/skin-blue.css": "public/build/less/skins/skin-blue.less",
          "public/dist/css/skins/skin-black.css": "public/build/less/skins/skin-black.less",
          "public/dist/css/skins/skin-yellow.css": "public/build/less/skins/skin-yellow.less",
          "public/dist/css/skins/skin-green.css": "public/build/less/skins/skin-green.less",
          "public/dist/css/skins/skin-red.css": "public/build/less/skins/skin-red.less",
          "public/dist/css/skins/skin-purple.css": "public/build/less/skins/skin-purple.less",
          "public/dist/css/skins/skin-blue-light.css": "public/build/less/skins/skin-blue-light.less",
          "public/dist/css/skins/skin-black-light.css": "public/build/less/skins/skin-black-light.less",
          "public/dist/css/skins/skin-yellow-light.css": "public/build/less/skins/skin-yellow-light.less",
          "public/dist/css/skins/skin-green-light.css": "public/build/less/skins/skin-green-light.less",
          "public/dist/css/skins/skin-red-light.css": "public/build/less/skins/skin-red-light.less",
          "public/dist/css/skins/skin-purple-light.css": "public/build/less/skins/skin-purple-light.less",
          "public/dist/css/skins/_all-skins.css": "public/build/less/skins/_all-skins.less"
        }
      },
      // Production compresses version
      production: {
        options: {
          // Whether to compress or not
          compress: true
        },
        files: {
          // compilation.css  :  source.less
          "public/dist/css/AdminLTE.min.css": "public/build/less/AdminLTE.less",
          // Skins minified
          "public/dist/css/skins/skin-blue.min.css": "public/build/less/skins/skin-blue.less",
          "public/dist/css/skins/skin-black.min.css": "public/build/less/skins/skin-black.less",
          "public/dist/css/skins/skin-yellow.min.css": "public/build/less/skins/skin-yellow.less",
          "public/dist/css/skins/skin-green.min.css": "public/build/less/skins/skin-green.less",
          "public/dist/css/skins/skin-red.min.css": "public/build/less/skins/skin-red.less",
          "public/dist/css/skins/skin-purple.min.css": "public/build/less/skins/skin-purple.less",
          "public/dist/css/skins/skin-blue-light.min.css": "public/build/less/skins/skin-blue-light.less",
          "public/dist/css/skins/skin-black-light.min.css": "public/build/less/skins/skin-black-light.less",
          "public/dist/css/skins/skin-yellow-light.min.css": "public/build/less/skins/skin-yellow-light.less",
          "public/dist/css/skins/skin-green-light.min.css": "public/build/less/skins/skin-green-light.less",
          "public/dist/css/skins/skin-red-light.min.css": "public/build/less/skins/skin-red-light.less",
          "public/dist/css/skins/skin-purple-light.min.css": "public/build/less/skins/skin-purple-light.less",
          "public/dist/css/skins/_all-skins.min.css": "public/build/less/skins/_all-skins.less"
        }
      }
    },
    // Uglify task info. Compress the js files.
    uglify: {
      options: {
        mangle: true,
        preserveComments: 'some'
      },
      my_target: {
        files: {
          'public/dist/js/app.min.js': ['public/dist/js/app.js']
        }
      }
    },
    // Build the documentation files
    includes: {
      build: {
        src: ['*.html'], // Source files
        dest: 'public/documentation/', // Destination directory
        flatten: true,
        cwd: 'public/documentation/build',
        options: {
          silent: true,
          includePath: 'public/documentation/build/include'
        }
      }
    },

    // Optimize images
    image: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'public/build/img/',
          src: ['**/*.{png,jpg,gif,svg,jpeg}'],
          dest: 'public/dist/img/'
        }]
      }
    },

    // Validate JS code
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      core: {
        src: 'public/dist/js/app.js'
      },
      demo: {
        src: 'public/dist/js/demo.js'
      },
      pages: {
        src: 'public/dist/js/pages/*.js'
      }
    },

    // Validate CSS files
    csslint: {
      options: {
        csslintrc: 'public/build/less/.csslintrc'
      },
      public/dist: [
        'public/dist/css/AdminLTE.css',
      ]
    },

    // Validate Bootstrap HTML
    bootlint: {
      options: {
        relaxerror: ['W005']
      },
      files: ['public/pages/**/*.html', '*.html']
    },

    // Delete images in public/build directory
    // After compressing the images in the public/build/img dir, there is no need
    // for them
    clean: {
      public/build: ["public/build/img/*"]
    }
  });

  // Load all grunt tasks

  // LESS Compiler
  grunt.loadNpmTasks('grunt-contrib-less');
  // Watch File Changes
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Compress JS Files
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Include Files Within HTML
  grunt.loadNpmTasks('grunt-includes');
  // Optimize images
  grunt.loadNpmTasks('grunt-image');
  // Validate JS code
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Delete not needed files
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Lint CSS
  grunt.loadNpmTasks('grunt-contrib-csslint');
  // Lint Bootstrap
  grunt.loadNpmTasks('grunt-bootlint');

  // Linting task
  grunt.registerTask('lint', ['jshint', 'csslint', 'bootlint']);

  // The default task (running "grunt" in console) is "watch"
  grunt.registerTask('default', ['watch']);
};
