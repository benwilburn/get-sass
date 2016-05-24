'use strict'
const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', ['sass:compile', 'sass:watch'])

gulp.task('sass:compile', () => (
		return gulp.src('./static/**/*.scss')
			.pipe(sass())
			.pipe(gulp.dest('./static'))
	))

gulp.task('sass:watch', () => (
	gulp.watch('./static/**/*.scss', ['sass'])
	))
