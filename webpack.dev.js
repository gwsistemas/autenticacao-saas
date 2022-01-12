const path = require('path')
const { DefinePlugin, EnvironmentPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: {
      directory: path.join(__dirname, 'public')
    },
    historyApiFallback: true,
    port: 8080
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify(
        'https://api.gwsistemas.com.br/api-gwsistemas-hom'
      ),
      'process.env.ESTAGIO': JSON.stringify('HOM')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'template.dev.html')
    }),
    new EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false
    })
  ]
})
