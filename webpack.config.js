const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
  entry: './src/main.js',
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
        //test: /\.svg$/,
        // use: 'svg-inline-loader'
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
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
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
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, 'src/partials/home/banner.html'),
      template_filename: ['index.html']
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, 'src/partials/home/news.html'),
      template_filename: ['index.html']
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, 'src/partials/home/events.html'),
      template_filename: ['index.html']
    }),

    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new CleanWebpackPlugin(),
  ]
};