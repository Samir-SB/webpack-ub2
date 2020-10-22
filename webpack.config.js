const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
  entry: './src/javascript/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: 'images',
            name: '[name].[ext]',
          }
        }]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },

      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: 'fonts',
            //name: '[path][name].[ext]'
          }
        }]
      },
      {
        test: /\.(html)$/,
        exclude: /(partials)/,
        use: [{
          loader: 'html-loader',
          options: {
            //minimize: true
          },
        }],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, 'src/partials/image.html'),
      // location: 'navigation',
      template_filename: ['index.html']
    }),

    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ]
};