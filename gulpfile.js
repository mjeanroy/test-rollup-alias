const path = require('path');
const gulp = require('gulp');
const rollup = require('gulp-rollup');
const alias = require('rollup-plugin-alias');

gulp.task('bundle', () => {
  return gulp.src(path.join(__dirname, 'src/index.js'))
    .pipe(rollup({
      external: ['underscore'],
      plugins: [
        alias({
          lodash: 'underscore'
        })
      ]
    }))
    .pipe(gulp.dest(path.join(__dirname, 'dist')));
});

gulp.task('default', ['bundle']);
