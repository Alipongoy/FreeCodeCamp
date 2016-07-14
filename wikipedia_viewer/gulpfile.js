var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync').create();

gulp.task('default', ['sass'], function(){
	browserSync.init({
		server: "."
	});

	gulp.watch('css/*.sass', ['sass']);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('js/*.js').on('change', browserSync.reload);
});

gulp.task('sass', function(){
	return gulp.src('css/*.sass')
				.pipe(sass())
				.pipe(gulp.dest('css'))
				.pipe(browserSync.stream());
});

gulp.task('serve', ['default']);
