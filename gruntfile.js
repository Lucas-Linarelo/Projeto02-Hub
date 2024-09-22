module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg}'],
                    dest: 'dist/images/'
                }]
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },

        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '**/*.js',
                    dest: 'dist/js',
                    ext: '.min.js'
                }]
            }
        },

        copy: {
            fonts: {
                expand: true,
                cwd: 'src/fonts',
                src: '**/*.{eot,svg,ttf,woff,woff2}',   // eot,svg,ttf,woff,woff2 arquivo de fontes. Obrigado internet XD
                dest: 'dist/fonts/'
            }
        },

        watch: {
            scripts: {
                files: ['src/js/**/*.js'],
                tasks: ['uglify'],
            },
            css: {
                files: ['src/css/**/*.css'],
                tasks: ['cssmin'],
            },
            images: {
                files: ['src/images/**/*.{png,jpg}'],
                tasks: ['imagemin'],
            },
            fonts: {
                files: ['src/fonts/**/*.{eot,svg,ttf,woff,woff2}'], 
                tasks: ['copy:fonts'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['imagemin', 'cssmin', 'uglify', 'copy:fonts']);
};
