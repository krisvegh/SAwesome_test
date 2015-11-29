var gulp = require('gulp'),
	browsersync = require('browser-sync'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps')
;

var config = {
	app : 'app',
	index : 'index.html',
	css : 'app/css/',
	allscss : 'app/scss/**/*.scss',
	allJS: 'app/**/*.js'	
};


/**
 * Compiles scss file into the css folder,
 * writes sourcemaps at the end of the css file,
 * automatically adds vendor prefixes
 */
gulp.task('sass', function() {
	return sass(config.allscss, {
		sourcemap: true
	})
	.on('error', function(err) {
		console.error('Error!', err.message);
		})
	.pipe(autoprefixer({
		cascade: false
		}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(config.css));	
});


/**
 * Serves the page on localhost:3000, 
 * opens google chrome,
 * listens to scroll/click events on any browswer and broadcasts it to all other clients 
 */
gulp.task('serve', ['sass'], function() {
	browsersync.init({
		server: {
			baseDir: config.app,
			index: config.index
		},
		files: [
			config.css,
			config.app + '/' + config.index,
			config.allJS
		],
		port: 3000,
		browser: 'google chrome'
	});
});

gulp.watch(config.allscss, ['sass']);

gulp.task('default', ['serve']);