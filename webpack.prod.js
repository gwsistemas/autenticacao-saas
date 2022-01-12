const path = require('path')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
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
  externals: {
    react: 'React',
    axios: 'axios',
    recoil: 'Recoil',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM'
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify(
        'https://api.gwsistemas.com.br/api-gwsistemas-hom'
      ),
      'process.env.ESTAGIO': JSON.stringify('HOM')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'template.prod.html')
    })
  ]
})
