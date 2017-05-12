import webpack from 'webpack';
import path from 'path';

const webpackConfig = {
	entry: [
		'bootstrap-loader',
		'./modules/core/client/core.client.run'
	],
	output: {
		path: path.join(__dirname, '../../../../public'),
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'modules'],
		extension: ['', '.js'],
		alias: {
			angular: "angular/angular.min.js"
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.html$/,
				loader: 'raw'
			},
			{
				test: /(\.scss|\.css)$/,
				loaders: [
					'style',
					'css',
					'autoprefixer?browsers=last 3 versions',
					'sass?outputStyle=expanded'
				]
			}, 
			{
				test: /bootstrap-sass\/assets\/javascripts\//,
				loader: 'imports?jQuery=jquery'
			},
			{ 
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				loader: "url-loader?limit=10000&mimetype=application/font-woff" 
			},
      		{ 
      			test: /\.(ttf|eot|svg|jpe?g|png|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
      			loader: "file-loader" 
      		},
      		{
	            test: /angular\.min\.js$/,
	            loader: 'exports?angular'
	        }
		]
	}
};

export default webpackConfig;