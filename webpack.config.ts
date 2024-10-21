import * as webpack from 'webpack'; // импортируем все типы Webpack
import * as path from 'path'; // для корректного обработки путей на разных ОС
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import 'webpack-dev-server';
const config: webpack.Configuration = {
  entry: './src/index.tsx', //точка входа в приложение
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/[name].[contenthash].js',
    publicPath: '/',
    clean: true,
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
    extensions: ['.ts', '.tsx', '.js', '.css'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
    }),
    new webpack.ProgressPlugin(),
    new Dotenv(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 9000,
    hot: true,
  },
  mode: 'production', //development
};

export default config;
