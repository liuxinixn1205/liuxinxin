const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:{
        index:'./src/index.js',

    },
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8080',
        compress:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"index",
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:"./src/index.html"
        }),
        new ExtractTextPlugin('./css/main.css')
    ],
    module:{
        rules:[{
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:"css-loader",
                    publicPath:"../"
                })
            },{
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        limit:1000000,
                        outputPath:'img/'
                    }
                }]
            },{
                test:/\.(html|htm)$/i,
                loader:'html-withimg-loader'
            }]
    }
}