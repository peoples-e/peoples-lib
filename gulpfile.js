var exec = require('child_process').exec;

var colors = require('colors');
var gulp   = require('gulp');

var concat         = require('gulp-concat');
var uglify         = require('gulp-uglify');
var del            = require('del');
var gulpBowerFiles = require('gulp-bower-files');


var paths = {
  scripts: [],
  watch : ['app/_attachments/index.html'],
  scriptDest : "./app/_attachments/script"
};

gulp.task("vendor", function(){
    gulpBowerFiles()
    .pipe(uglify())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(paths.scriptDest));
});

gulp.task("couchapp", function(){
  exec("cd app; couchapp push", function (error, stdout, stderr) {      
    console.log('Gulp CouchApp:'.magenta);
    if (error !== null) {
      console.log('ERROR:'.red + ' ' + error.red);
      return;
    }
    console.log(stdout.grey);
    var pieces = stderr.split("\n");
    console.log(pieces[0])
    console.log(pieces[1].magenta.underline);
  });
});

gulp.task('watch', function(){
  gulp.watch(paths.watch, ['couchapp']);
});