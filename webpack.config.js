const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

const extractSass = new ExtractTextWebpackPlugin({
	filename: 'app.css'
});

const configs = {
	entry: path.resolve(SRC_DIR, 'app.js'),
	output: {
		path: DIST_DIR,
		filename: 'app.js',
		publicPath: '/'
	},	
	module: {
		rules: [
			{
				test: /\.(js|js)/,
				include: SRC_DIR,
				loader: ['babel-loader']
			},
			{
				test: /\.scss$/,
				include: SRC_DIR,
				use: extractSass.extract({
					use: ['css-loader', 'sass-loader'],
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [
		extractSass
	],
	devServer: {
		port: 8090,
		contentBase: SRC_DIR
	}
};

module.exports = function(env) {
	configs.plugins.push(new webpack.DefinePlugin({
		process: {
			env: {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
			}
		}
	}));
	return configs;
}
