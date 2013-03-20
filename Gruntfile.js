module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';\n',
        stripBanners: true
      },
      dist: {
        //src: ['three.js/build/three.js', 'threex/threex.domevent.js', 'threex/threex.domevent.object3d.js', 'Physijs/physi.js'],
        src: [
          'three.js/src/Three.js', 
          'three.js/src/math/*.js',
          'three.js/src/core/*.js',
          'three.js/src/cameras/*.js',
          'three.js/src/lights/*.js',
          'three.js/src/loaders/*.js',
          'three.js/src/materials/*.js',
          'three.js/src/textures/*.js',
          'three.js/src/objects/*.js',
          'three.js/src/scenes/*.js',
          'three.js/src/renderers/*.js',
          'three.js/src/renderers/renderables/*.js',
          'three.js/src/extras/core/*.js',
          'three.js/src/extras/helpers/*.js',
          'three.js/src/extras/objects/*.js',
          'three.js/src/extras/renderers/plugins/*.js',
          'three.js/src/extras/shaders/*.js',
          'threex/*.js',
          'Physijs/physi.js'
        ],
>>>>>>> e293257bae40763075bbf68ed28616a3558116f1
        dest: 'build/<%= pkg.name %>.js'
      }
    },
    wrap: {
      options: {
        header: 'header.js',
        footer: 'footer.js'
      },
      dist: {
        src: ['build/<%= pkg.name %>.js']
      }
    },
    uglify: {
      options: {

      },
      dist: {
        src: 'build/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-wrapper');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'wrap']);
  grunt.registerTask('min', ['concat', 'wrap', 'uglify']);

};
