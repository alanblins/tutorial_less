var less = {
        development: {
            options: {
            
            },
            files: {
            'style.css': 'style.less'
            }
        }
    };

module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['*.less'],
      tasks: ['less']
    },
    less: less
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less','watch']);

};