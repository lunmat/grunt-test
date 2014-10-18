module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        clean: {
            src: ['dist']
        }
    });

    grunt.registerTask('default', ['clean']);
};