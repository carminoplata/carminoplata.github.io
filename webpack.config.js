const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  mode: "development", // "production" | "development" | "none"
  // webpack folder’s entry js — excluded from jekll’s build process.
  // Multiple entry
  entry:'./webpack/index.js', /*{
    index: './webpack/index.js',
    navbar: './webpack/components/Navbar.js'
  },*/
  // HtmlWebpackPlugin will generate an index.html useful to publish the website on
  // Github Pages
  /*plugins: [
    new HtmlWebpackPlugin({
      title: 'Carmine Sacco - Portfolio'
    })
  ],*/
  // we’re going to put the generated file in the assets folder so 
  // jekyll will grab it.
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: "index.js"
  },
  /*optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },*/
  module: {
    // Define loaders which are used to generate the output file from source files
    rules: [
      {
        // Regex to detect css files
        test: /\.css$/,
        // Define the loaders' chain used to process the files
        use:[
          'style-loader',
          'css-loader'
        ],
      },
      /*{
        // Regex to detect scss files
        test: /\.scss$/,
        // Define the loaders' chain used to process the files
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },*/
      {
        // Regex to detect images files
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ]
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use:[
          'babel-loader'
        ]
      }
    ]
  }
}