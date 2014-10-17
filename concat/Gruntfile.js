module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        concat: {
            target: {
                files: {
                    "build/file-abc.js": ["src/file-a.js", "src/file-b.js", "src/file-c.js"]
                }
            }
        }
    });

    grunt.registerTask('default', ['concat']);
};