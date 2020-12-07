module.exports = function (grunt) {
  // configure the tasks
  grunt.initConfig({ 
    copy: {
      build: {
        cwd: 'src',
        src: ['**'],
        dest: 'dest',
        expand: true
      },
      css: {
        cwd:'src',
        src: 'src/style/**',
        dest: 'dest/style',
        expand: true
      }
    },
    clean: {
      build: {
        src: ['dest']
      },
      all_ts: ['dest/scripts/*.ts']
    },
    ts: {
      default : {
        tsconfig: './tsconfig.json'
      }
    }
  });

   
  grunt.registerTask("default", ['clean:build', 'copy:build', 'clean:all_ts', 'ts' ]);

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-ts");
};
