module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
        stripBanners: true
      },
      dist: {
        src: ['three.js/build/three.js', 'threex/threex.domevent.js', 'Physijs/physi.js'],
        //
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-wrapper');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'wrap']);

};
