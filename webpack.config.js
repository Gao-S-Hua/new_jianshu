const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
  };

module.exports = env =>{
    return{

        entry : resolve('./src/index.js'),
        mode : env.mode,
        output : {
            path : resolve('./dist'),
            filename : 'js/[name]-[hash:8].js',
            chunkFilename : 'js/[name].chunk.[chunkhash:4].js',
            // publicPath : 'www.host.com',
            publicPath : '/'
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
            alias : { Images : resolve('./src/assets'), Styles : resolve('./src/styles') }
        },
        module:{
            rules : [
                {test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
                {
                    test : /\.(css|less)/, 
                    include: [
                        resolve('./src/style')
                    ],
                    use:[
                        {loader: MiniCssExtractPlugin.loader},
                        {loader: 'css-loader',options:{modules: true, url: true}}, 
                        'less-loader']
                },
                {
                    test : /\.(css)/, 
                    include: [
                        resolve('./node_modules/antd')
                    ],
                    use:[{loader: MiniCssExtractPlugin.loader},'css-loader']
                },
                {
                    test: /\.(png|jpe?g|gif|ico)$/i, 
                    loader: 'file-loader',
                    options: {name: '[name].[hash:8].[ext]', outputPath: 'media'} 
                },
            ]
        },
        plugins:[
            new htmlWebpackPlugin({
                template : resolve('./src/assets/index.html'),
                title : "简书 - 创作你的创作",
                minify : {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true
                }
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[hash:4].css',
                chunkFilename: 'css/[id].[chunkhash:4].css',
                ignoreOrder: false
              })
        ],
        devServer: {
            port: 3000,
            open: true,
            historyApiFallback: true,
            proxy: {
              '/api/**': {
                target: 'http://localhost:8000',
                secure: false,
                changeOrigin: true,
              }
            }
          }
    }
}