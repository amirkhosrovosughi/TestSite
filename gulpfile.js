var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');


gulp.task('default',function(){
	console.log("Great!, first Gulp task is created");
});

gulp.task('html', function(){
	console.log("Imagine something cool happens in your HTML file");
});

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./temp/styles'));

//console.log("Imagine something cool happens in your CSSfile");


});



gulp.task('watch', function(){
	watch('./app/index.html',function(){
		gulp.start('html');
	})

	watch('./app/assets/styles/**/*.css',function(){
		//console.log("Something st");
		gulp.start('styles');
	})

});





