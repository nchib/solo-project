const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//READ THE ERRORS! If it says a module is missing, it needs to be installed for the program
//to work properly!

module.exports =  {
    //process.env.NODE_ENV allows us to choose between production and development mode by
    //entering the package.json file and editing the respective "start" and "dev" properties.
    //"start" being for localhost3000 (production) and "dev" being for localhost8080 (development)
    mode: process.env.NODE_ENV,
    entry: {
        src: './client/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: 
                        //presets should just be one array
                        ["@babel/preset-env", "@babel/preset-react"]
                        
                    }
            },
            {
               test: /\.s?css/,
               use: [
                'style-loader', 'css-loader', 'sass-loader'
               ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            inject: false,
            template: 'index.html'
        }),
    ],
    devServer: {

        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'build')
        },
        historyApiFallback: true,
        proxy: {
            '/api' : 'http://localhost:3000'
        },
        hot: true,
        port: 8000
    }
}