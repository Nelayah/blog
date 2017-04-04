import gulp from 'gulp';
import clean from 'gulp-clean';

gulp.task('deleteServer', () => {
	return gulp.src('server/dist', { read: false })
		.pipe(clean());
});

gulp.task('deleteBundle', ['deleteServer'], () => {
	return gulp.src('dist', { read: false })
		.pipe(clean());
});

gulp.task('default', ['deleteServer']);