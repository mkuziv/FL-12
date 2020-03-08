/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/js/func.js', './src/js/app.js'],
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          root: './src/index.html',
          esModule: false
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          {
            loader: MiniCssExtractPlugin.loader,
            options: {} 
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
              esModule: false
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new CleanWebpackPlugin(),
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production', // Disable during development
      pngquant: {
        quality: '95-100'
      }
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};