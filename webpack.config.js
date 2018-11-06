module.exports = {
	mode: 'development', 
	output: {
		publicPath: '/dist'
	},
	module: {
		rules: [{
			test: /\.jsx?$/, 
			use: ['babel-loader']
		}]
	}
}