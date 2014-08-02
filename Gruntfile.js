module.exports = function(grunt){
	var fileBanner = '/* \n ' +
    'Name: <%= pkg.name %> \n ' +
    'Description: <%= pkg.description %> \n ' +
    'Version: v<%= pkg.version %> \n ' +
    'Author: <%= pkg.author %>\n' +
    '*/';

  var srcFiles = [
    'src/module.js',
    'src/utils.js',
    'src/events.js',
    'src/directives.js'
  ];

	grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: fileBanner,
        compress: true,
        singleQuotes: true,
        sourceMap: true,
        sourceMapName: 'dist/angular-scrollstop.min.js.map'
      },
      app: {
        files: {
          'dist/angular-scrollstop.min.js' : 'dist/angular-scrollstop.js'
        }
      }
    },
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: {
          'dist/angular-scrollstop.js': srcFiles
        }
      }
    },
    watch: {
      files: srcFiles,
      tasks: ['ngAnnotate','uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-Annotate');
  grunt.registerTask('default', ['ngAnnotate', 'uglify']);
};
