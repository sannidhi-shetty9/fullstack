const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

     module.exports = {
       entry: './src/index.js', // Entry point for your application
       output: {
         filename: 'bundle.js', // Output bundle filename
         path: path.resolve(__dirname, 'dist'), // Output directory
       },
       module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
      ],
     };