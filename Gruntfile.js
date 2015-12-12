
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
            },
            demo_lib : {
                expand : true,
                cwd : 'dist',
                src: ['ak-slider.min.js', 'ak-slider.min.css'],
                dest : '<%= globalConfig.demo %>/lib/slider'
            },
            demo_bower: {
                expand : true,
                cwd : 'bower_components',
                src: ['**'],
                dest : '<%= globalConfig.demo %>/lib/bower_components'
            }
        },
        "gh-pages": {
            options: {
                base: "<%= globalConfig.demo %>"
            },
            src: ['**']
        },
        clean: {
            build: ["<%= globalConfig.output %>/"],
            demo: ["<%= globalConfig.demo %>/lib/"]
        },
        uglify: {
            options: {
                compress: true,
                mangle: true,
                sourceMap: false
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

    grunt.registerTask("default", [ "clean:build", "copy:dist_files", "uglify", "cssmin"]);
    grunt.registerTask("publish", ["default", "clean:demo", "copy:demo_lib", "copy:demo_bower", "gh-pages"])

};