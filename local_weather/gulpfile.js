var gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		sass = require('gulp-sass'),
		jade = require('gulp-jade');

gulp.task('serve', ['sass', 'jade'], function() {
	browserSync.init({
		server: "."
	});

	gulp.watch('css/*.sass', ['sass']);
	gulp.watch('./*.jade', ['jade']);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('js/*.js').on('change', browserSync.reload);
});

gulp.task('sass', function(){
	return gulp.src('css/*.sass')
				.pipe(sass())
				.pipe(gulp.dest('css'))
				.pipe(browserSync.stream());
});


gulp.task('jade', function(){
	return gulp.src('./*.jade')
				.pipe(jade())
				.pipe(gulp.dest('./'))
				.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
