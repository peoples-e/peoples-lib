var exec = require('child_process').exec;

var colors = require('colors');
var gulp   = require('gulp');

var concat         = require('gulp-concat');
var uglify         = require('gulp-uglify');
var less           = require('gulp-less');
var del            = require('del');
var gulpBowerFiles = require('gulp-bower-files');


var paths = {
  scripts: [],
  watch : ['app/_attachments/index.html', 'src/**'],
  scriptDest : "./app/_attachments/script",
  cssDest : "./app/_attachments/style"
};

gulp.task("vendor", function(){
    gulpBowerFiles()
    .pipe(uglify())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(paths.scriptDest));
});

gulp.task("couchapp", ['less'], function(){
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

gulp.task('less', function(){
  return gulp.src('./src/less/**/*.less')
  .pipe(less({
    paths: [ __dirname + '/bower_components/bootstrap-less/less/' ],
    compress : true
  }))
  .pipe(gulp.dest(paths.cssDest));
});

gulp.task('watch', function(){
  gulp.watch(paths.watch, ['couchapp']);
});