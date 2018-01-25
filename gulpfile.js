/**
 * Gulpfile for Dashicon Extended
 *
 * @author Daniel M. Hendricks
 * @version 1.0.0
 * @license GPL-3.0
 * {@link https://github.com/dmhendricks/dashicons-extended GitHub repo}
 */

var pkg           = require( './package.json' );
var fs            = require( 'fs' );
var async         = require( 'async' );
var gulp          = require( 'gulp' );
var iconfont      = require( 'gulp-iconfont' );
var consolidate   = require( 'gulp-consolidate' );
var rename        = require( 'gulp-rename' );
var minifycss     = require( 'gulp-uglifycss' );
var lineec        = require( 'gulp-line-ending-corrector' );
var filter        = require( 'gulp-filter' );
var iconfontHtml  = require( 'gulp-iconfont-template' );
var file          = require( 'gulp-file' );
var sort          = require( 'gulp-sort' );
var glyphsMap     = require( 'iconfont-glyphs-map' );

gulp.task('default', function( done ){

  var iconStream = gulp.src( [ 'src/icons/**/*.svg' ], { base: 'src' } )
    .pipe( sort() )
    .pipe( iconfontHtml( {
      fontName: pkg.name,
      path: 'src/templates/demo.html',
      targetPath: '../demo/index.html',
      cssClass: pkg.config.css_class
    }))
    .pipe( iconfont( {
      fontName: pkg.name,
      fontHeight: 1000,
      normalize: true
    })
  );

  async.parallel([

    function handleGlyphs ( cb ) {

      iconStream.on( 'glyphs', function( glyphs, options ) {
        var glyphMap = glyphsMap( glyphs, true, true )
        file( '../assets/catalog.json', JSON.stringify( glyphMap ) )
          .pipe( gulp.dest( './demo' ) )
        gulp.src( 'src/templates/_icons.css' )
          .pipe( consolidate( 'lodash', {
            glyphs: glyphs,
            fontName: pkg.name,
            fontPath: 'font/',
            className: pkg.config.css_class
          }))
          .pipe( rename( {
            basename: pkg.name,
          }))
          .pipe( gulp.dest( './' ) )
          .pipe( filter( '**/*.css' ) )
          .pipe( rename( {
            basename: pkg.name,
            suffix: '.min'
          }))
          .pipe( minifycss() )
          .pipe( lineec() )
          .pipe( gulp.dest( './' ) )
          .on( 'finish', cb );
      });

    },
    function handleFonts ( cb ) {

      iconStream
        .pipe( gulp.dest( 'font/' ) )
        .on( 'finish', cb );

    }
  ], done);
});
