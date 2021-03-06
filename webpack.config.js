const path = require('path');

module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: './webpack/index.js',

  // we’re going to put the generated file in the assets folder so 
  // jekyll will grab it.
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: "bundle.js"
  },
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
          //'sass-loader'
        ],
      },
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