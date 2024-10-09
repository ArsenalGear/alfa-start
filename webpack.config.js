const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// const TerserPlugin = require('terser-webpack-plugin'); // Для минимизации JS
// const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Для CSS
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // Для минимизации

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/[name].[contenthash].js',
    publicPath: '/',
    clean: true, // Очищает папку build перед каждой новой сборкой
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/gifs',
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true, // Автоматическое подключение сгенерированных файлов JS и CSS
    }),
    new webpack.ProgressPlugin(),
    new Dotenv(),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
  },
  mode: 'production',
};
