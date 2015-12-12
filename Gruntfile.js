
module.exports = function(grunt) {

    var globalConfig = {
        output: 'dist',
        demo: 'demo',
        source: 'src',
        buildFileName: "ak-slider"
    };

    grunt.initConfig({
        globalConfig: globalConfig,
        copy: {
            dist_files : {
                expand : true,
                cwd : '<%= globalConfig.source %>',
                src: ['*'],
                dest : '<%= globalConfig.output %>/'
            }
        },
        "gh-pages": {
            options: {
                base: "<%= globalConfig.demo %>"
            },
            src: ['**']
        },
        clean: {
            build: ["<%= globalConfig.output %>/"]
        },
        uglify: {
            options: {
                compress: true,
                mangle: true,
                sourceMap: true
            },
            jstarget: {
                src: "<%= globalConfig.output %>/<%= globalConfig.buildFileName %>.js",
                dest: "<%= globalConfig.output %>/<%= globalConfig.buildFileName %>.min.js"
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= globalConfig.output %>',
                    src: ['<%= globalConfig.buildFileName %>.css'],
                    dest: '<%= globalConfig.output %>',
                    ext: '.min.css'
                }]
            }
        }
    });


    grunt.loadNpmTasks("grunt-gh-pages");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask("default", [ "clean","copy", "uglify", "cssmin"]);
    grunt.registerTask("publish", ["default", "gh-pages"])

};