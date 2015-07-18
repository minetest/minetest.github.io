module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ["css/stylus/*.styl"],
      tasks: ["stylus"]
    },
    stylus: {
      "css/main.min.css": ["css/stylus/*.styl"],
      options: {
        globals: {
          compress: true
        }
      }
    },
  });

  grunt.loadNpmTasks("grunt-contrib-stylus");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["stylus"]);

};
