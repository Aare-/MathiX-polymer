module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'sass_out/*.css',
                dest: 'public/styles'                
            }
        },
        watch: {
            files: ["sass_out/*.css"],
            tasks: ["autoprefixer"],
            options: {
                spawn: false,
            },             
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};