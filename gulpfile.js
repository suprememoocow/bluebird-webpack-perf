/* jshint node:true */
'use strict';

var gulp      = require('gulp');
var webpack   = require('webpack');
var gutil     = require('gulp-util');

gulp.task("default", function(callback) {
    // run webpack
    webpack({
      entry: "./bluebird-with-webpack.js",
      output: {
        path: "dist/",
        filename: "bluebird-with-webpack.js",
      },
      module: {
        noParse: [
          /bluebird\/js\/browser\/bluebird\.js/
        ]
      },
      stats: true,
      devtool: "#eval",
      failOnError: true,
      node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
        setImmediate: false
      },
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});
