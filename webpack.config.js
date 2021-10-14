const path = require('path')
// const { EnvironmentPlugin } = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')
// const ReactRefreshTypeScript = require('react-refresh-typescript')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

console.log(`mode: ${isDevelopment ? 'development' : 'production'}`)

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: require.resolve('ts-loader'),
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
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true,
    hot: true,
    port: 8080,
    overlay: {
      errors: true,
      warnings: false
    }
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new ReactRefreshWebpackPlugin(),
    new DashboardPlugin()
  ].filter(Boolean)
}
