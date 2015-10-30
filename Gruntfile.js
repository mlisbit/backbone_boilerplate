module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      build: {
        files: [{
          cwd: ".",
          src: ["**"],
          dest: './build',
          expand: true
        }]
      }
    },

    clean: {
      build: {
        src: [ 'build' ]
      },
      build2: {
        src: [
          'build/Gruntfile.js',
          'build/package.json',
          'build/node_modules',
          'build/sass',
        ]
      },
    },

    /* Builds the sass to css */
    sass: {
      options: {
        sourceMap: true
      },
      build: {
        files: {
          'build/css/style.css': 'sass/app.scss'
        }
      }
    },

    jsdoc2md: {
      docs: {
          src: "js/*.js",
          dest: "api/api.md",
      },
    },

    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'build/css/ontel.min.css': 'build/css/ontel.css'
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          name : 'app',
          baseUrl: "build/js",
          mainConfigFile: "build/js/main.js",
          out: "build/optimized.js",
        }
      }
    }, //end require

    watch: {
      sass: {
        files: ['sass/*.scss'],
        tasks: [
          'sass:build',
          'concat:build',
          'postcss:build'
        ],
        options: {
          spawn: false,
          livereload: true,
        },
      },
    },

    concat: {
      build: {
        src: ['build/css/style.css'],
        dest: 'build/css/stlye.css',
      },
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
        ]
      },
      build: {
        src: 'build/css/*.css'
      }
    }, //end postcss

    connect: {
      server: {
        options: {
          index: 'index.html',
          keepalive: true,
          port: 8000,
        }
      }
    }, //end connect

  });

  // Load the plugin that provides the "uglify" task.
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('serve', [
    'connect:server'
  ]),

  grunt.registerTask('docs', [
    'jsdoc2md:docs'
  ]),
  grunt.registerTask('build', [
    'clean:build',
    'copy:build',
    'sass:build',
    'concat:build',
    'cssmin:build',
    'postcss:build',
    'requirejs:compile',
    'clean:build2'
  ]);

};

