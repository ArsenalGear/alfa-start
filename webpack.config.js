const webpack = require('webpack'); //обычные импорты можно будет использовать после перехода на ts
const path = require('path'); //для корректного обработки путей на разных ОС
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
//copyWEbPackPlugin - работает с папкой public - допустим там лежат переводы 2:13:00 //перемещение куска проекта
//глобальные переменные __PLATFORM__ 1:49:00
//вебпак на ts 28:26
// const TerserPlugin = require('terser-webpack-plugin'); // Для минимизации JS
// const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Для CSS
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // Для минимизации
//можно сделать стрелочную функцию и передать переменную dev prod для мод из package.json 15:39
// const isDev = env.mode === 'development'
//для передачи данных извне для конфигураций
module.exports = { //запускается в среде node js поэтому используем module.exports // export default ожно будет использовать после перехода на ts
  // В Node.js модули экспортируются с помощью module.exports, что позволяет другим файлам импортировать их. Это стандартный способ работы с модулями в Node.js и CommonJS.
  entry: './src/index.tsx', //точка входа в приложение
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/[name].[contenthash].js',
    publicPath: '/',
    clean: true, // Очищает папку build перед каждой новой сборкой
  },
  //лоадеры ts-loader package.json - цепочка обработчиков через которые проходят файлы с тем или иным расширением scss в css итд, порядок лоадеров важен с конца массива
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i, //1:42:00 svg
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
        test: /\.(ts|tsx)$/, //для ускорения сборки проверка типов отключить/включить, чтобы не падала сборка из-за ошибки в TS
        exclude: /node_modules/, //не обрабатывать папку
        use: 'ts-loader', //компиляция TS вместо babel //babel лучше поддерживают компиляцию для браузеров с новыми ф-циями js
        //для замены ts-loader на babel 2:16
        // options: {
        //   transpileOnly: true //только сборка-компиляция без проверки типов TS
        // }
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      '@': path.resolve(__dirname, 'src') // Убедитесь, что вы используете path.resolve
    }
  },
  //добавление доп функционала
  plugins: [
    new HtmlWebpackPlugin({ //как дев зависимость
      template: './public/index.html',//гененрирует нужный htmд файл
      inject: true, // Автоматическое подключение сгенерированных файлов JS и CSS
    }),
    new webpack.ProgressPlugin(),
    new Dotenv(),
  ],
  devtool: 'inline-source-map', //оставить для дебага на проде sourcemap 'source-map'
  devServer: {
    historyApiFallback: true, //для того чтобы в spa работали роуты
    port: 3000,
    open: true,
    // hot: true, //для того чтобы после ctrl+s - не слетали данные с формы /hot module reload /2:06:00
  },
  mode: 'production', //development
};






















