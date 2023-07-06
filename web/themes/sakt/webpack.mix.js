let mix = require('laravel-mix');
let path = require('path');
let glob = require('glob');
let LiveReloadWebpackPlugin = require('@kooneko/livereload-webpack-plugin');

mix.webpackConfig({
  plugins: [new LiveReloadWebpackPlugin()]
});
mix.options({
  postCss: [
    require("postcss-nested"),
    require("postcss-custom-media"),
    require("autoprefixer"),
  ]
});

// compile component styles
let pcssFiles = glob.sync('components/**/*.pcss');

pcssFiles.forEach((pcssFile) => {
  let outputDirectory = path.dirname(pcssFile);
  mix.postCss(pcssFile, outputDirectory, [
    require('postcss-import'),
    require('autoprefixer'),
  ]);
});

// compile global styles
mix.postCss('src/css/main.css', 'dist');

// mix.browserSync({
//   proxy: 'https://drupal.lndo.site',
//   files: ["components/**/css/*.css",],
//   port: 8888,
// });