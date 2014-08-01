var gulp = require('gulp');
gulp.task('heroku:production', ['html', 'images', 'fonts', 'copy']);