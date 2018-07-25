var gulp = require ('gulp');
var browserSync = require ('browser-sync');
var sass = require ('gulp-sass');

gulp.task('sass', () => {
    return gulp.src([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'src/scss/*.scss'
    ])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync());
})

gulp.task('serve', ['sass'] () =>{
    browserSync.init({
        server: './src' 
    })   
})

gulp.watch([
    'node_modules/bootstrap/scss/bootstrap.scss',
    'src/scss/*.scss'

])

gulp.watch('src/index.html').on('change', browserSync.reload);
