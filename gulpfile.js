'use strict';
var gulp = require('gulp'),
	less = require('gulp-less'),
	autopref = require('gulp-autoprefixer'),
	csso = require('gulp-csso'),
	rigger = require('gulp-rigger'),
	ng_a = require('gulp-ng-annotate'),
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch'),
	html2js = require('gulp-ng-html2js'),
	concat = require('gulp-concat'),
	htmlmin = require('gulp-htmlmin'),
	connect = require('gulp-connect'),
	rimraf = require('rimraf');

var path = {
	build: {
		html: 'build/',
		js: {
			dist: 'build/js',
			file: 'main.js'
		},
		ngHtml: {
			dist: 'build/js/',
			file: 'templates.js'
		},
		css: {
			dist: 'build/css',
			file: 'main.css'
		}
	},

	src: {
		html: 'src/*.html',
		js: [
			'src/js/main.js',
			'src/modules/*.js',
			'src/modules/**/*.js'
		],
		ngHtml: 'src/modules/**/*.html',
		style: [
			'src/style/main.*ss',
			'src/modules/**/*.*ss'
		]
	},

	watch: {
		html: 'src/**/*.html',
		js: [
			'src/js/main.js',
			'src/modules/**/*.js'
		],
		ngHtml: 'src/modules/**/*.html',
		style: [
			'src/style/main.*ss',
			'src/modules/**/*.*ss'
		]
	},

	clean: './build'
}

var server = {
	host: 'localhost',
	port: '9000'
}

var h2j_opts = {
	moduleName: 'channel-page'
}

var htmlmin_opts = {
	removeComments: true,
	collapseWhitespace: true,
//	conservativeCollapse: true
}


gulp.task('clean', function (cb) {
	rimraf(path.clean, cb);
});

gulp.task('webserver', function() {
	connect.server({
		host: server.host,
		port: server.port,
		livereload: true,
		root: path.build.html
	});
});

gulp.task('html:build', function () {
	gulp.src( path.src.html )
		.pipe( rigger() )
		.pipe( htmlmin(htmlmin_opts) )
		.pipe( gulp.dest( path.build.html ) )
		.pipe( connect.reload() );
});

gulp.task('js:build', function () {
	gulp.src( path.src.js )
		.pipe( rigger() )
		.pipe( concat( path.build.js.file ) )
		.pipe( ng_a() )
		.pipe( uglify() )
		.pipe( gulp.dest( path.build.js.dist ) )
		.pipe( connect.reload() );
});

gulp.task('ngHtml:build', function () {
	gulp.src( path.src.ngHtml )
		.pipe( rigger() )
		.pipe( htmlmin(htmlmin_opts) )
		.pipe( html2js( h2j_opts ) )
		.pipe( concat( path.build.ngHtml.file ) )
		.pipe( uglify() )
		.pipe( gulp.dest( path.build.ngHtml.dist ) )
		.pipe( connect.reload() );
});


gulp.task('css:build', function () {
	gulp.src( path.src.style )
		.pipe( less() )
		.pipe( concat( path.build.css.file ) )
		.pipe( autopref() )
		.pipe( csso() )
		.pipe( gulp.dest( path.build.css.dist ) )
		.pipe( connect.reload() );
});

gulp.task('build', [
	'css:build',
	'js:build',
	'ngHtml:build',
	'html:build'
]);

gulp.task('watch', function(){
	watch(path.watch.style, function(event, cb) {
		gulp.start('css:build');
	});
	watch(path.watch.js, function(event, cb) {
		gulp.start('js:build');
	});
	watch([path.watch.ngHtml], function(event, cb) {
		gulp.start('ngHtml:build');
	});
	watch([path.watch.html], function(event, cb) {
		gulp.start('html:build');
	});
});

gulp.task('default', [
	'build',
	'webserver',
	'watch'
]);
	