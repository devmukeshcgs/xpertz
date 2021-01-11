const sass = require('node-sass');
module.exports = function (grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Configurable paths
    var config = {
        appName: 'xpertz',
        src: 'src',
        dist: 'dist',
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['src/sass/**/*.{scss,sass}', 'src/sass/_partials/**/*.{scss,sass}', 'src/css/**/*.css'],
                tasks: ['sass:dist', 'cssmin']
            },
            javascript: {
                files: ['src/js/**/*.js'],
                tasks: ['concat', 'uglify']
            },
            livereload: {
                files: ['gruntfile.js', 'dist/*.html', 'dist/js/**/*.{js,json}', 'dist/css/*.css', 'dist/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            options: {
                sourceMap: true,
                implementation: sass,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'dist/css/bootstrap.min.css': 'src/sass/main.scss'
                }
            }
        },

        cssmin: {
            deps: {
                src: [
                    'src/css/icheck-1.x/skins/all.css',
                    'src/css/bootstrap-datetimepicker/bootstrap-datetimepicker.css',
                    'src/css/malihu-custom-scrollbar-plugin-master/jquery.mCustomScrollbar.min.css'
                ],
                dest: 'dist/css/app_xpertz.css'
            },
            main: {
                files: [{
                    expand: true,
                    cwd: 'dist/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css/',
                    ext: '.min.css'
                }]
            }
        },

        concat: {
            options: {
                seperator: '\n\n',
                sourceMap: true,
                sourceMap: false,
                stripeBanners: true,
                banner: '/*!<%= pkg.name %> - v<%= pkg.version %> - ' + ' <%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            dist: {
                src: ['src/js/jquery.min.js',
                    'src/js/bootstrap.js'
                ],
                dest: `dist/js/bootstrap_${config.appName}`,
            },
            deps: {
                src: [
                    'src/js/jquery.min.js',
                    'src/js/plugins/jquery.jquery.parallax-1.1.3.js',
                    'src/js/plugins/jquery.sliderPro.min.js',
                    'src/js/plugins/owl.carousel.js',
                    'src/js/plugins/TweenMax.min.js',
                    'src/js/plugins/ScrollMagic.min.js',
                    'src/js/plugins/animation.gsap.min.js',
                    'src/js/plugins/moment.min.js',
                    'src/js/plugins/jquery.mCustomScrollbar.min.js',
                    'src/js/plugins/bootstrap-datetimepicker.min.js',
                    'src/js/plugins/icheck.min.js',
                    'src/js/plugins/jquery.validate.min.js',
                    'src/js/app.js'
                ],
                dest: 'dist/js/app_xpertz.js'
            },
        },
        uglify: {
            options: {
                manage: false,
                sourceMap: true,
                preserveComments: 'all'
            },
            // Following task will take all the js in "dest/js" folder and combine in one minifyed js
            minifyalljs: {
                files: {
                    'dist/js/app_xpertz.min.js': ['dist/js/bootstrap_xpertz.js', 'dist/js/app_xpertz.js']
                }
            },
        },

        imagemin: {
            // static: {
            //     options: {
            //         optimizationLevel: 3,
            //         svgoPlugins: [{removeViewBox: false}],
            //         use: [mozjpeg()] // Example plugin usage 
            //     },
            //     files: {
            //         'dist/img.png': 'src/img.png',
            //         'dist/img.jpg': 'src/img.jpg',
            //         'dist/img.gif': 'src/img.gif'
            //     }
            // },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/images/tiny/'
                }]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['dist/js/*.js', 'dist/css/*.css', 'dist/*.html']
                },
                options: {
                    watchTask: true,
                    server: 'dist/'
                }
            }
        },
    });
    grunt.registerTask('default', ['browserSync', 'watch', 'sass:dist', 'imagemin:dynamic']);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
};