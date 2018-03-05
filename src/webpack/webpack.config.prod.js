// Dependencies and Node Modules
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

// ExtractTextWebpackPlugin Instances
const css = new ExtractTextWebpackPlugin('css/material.css');

module.exports = {
	entry: [
		path.join(__dirname, './src/index')
	],
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: css.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				})
			},
		]
	},
	plugins: [
		css,
		new HTMLWebpackPlugin({
			template: 'src/utils/templates/prod.html'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false,
				screw_ie8: true
			}
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
};
