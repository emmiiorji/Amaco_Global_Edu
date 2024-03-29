const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const buildPath = path.resolve(__dirname, 'dist')

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	entry: {
		index: './src/js/index.js',
	},
	devServer: {
		static: 'dist',
		historyApiFallback: true,
	},
	output: {
		filename: '[name].[fullhash].js',
		path: buildPath,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/inline',
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body',
			chunks: ['index'],
			filename: 'index.html',
			favicon: './src/assets/img/favicon.ico'
		})
	],
	stats: {
		errorDetails: true,
	},
}
