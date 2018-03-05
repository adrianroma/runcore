// Dependencies and Node Modules
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '../app')
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		rules: [
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
				use: [
					'style-loader',
					'css-loader',
				]
			},
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: '../utils/templates/development.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	]
};
