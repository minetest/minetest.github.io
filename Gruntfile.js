module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ["assets/css/stylus/*.styl"],
      tasks: ["stylus"]
    },
    stylus: {
      "assets/css/main.min.css": ["assets/css/stylus/*.styl"],
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
