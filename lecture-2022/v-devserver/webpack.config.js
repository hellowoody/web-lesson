import path from "path";
import {fileURLToPath} from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";        //把html文件打包
import MiniCssExtractPlugin from "mini-css-extract-plugin"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
    entry:"./src/main",
    output:{
        filename:"built.js",
        // assetModuleFilename:"./imgs/[name][ext]"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                //use数组中loader执行顺序，是从下到上依次执行
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader, //取代style-loader，作用:提取js中的css成单独文件
                        options:{
                            publicPath:"../",
                        }
                    },
                    "css-loader"
                ]
            },
            {
                test:/\.(jpe?g|png)$/,
                type:"asset",
                parser: {
                    //转base64的条件
                    dataUrlCondition: {
                      maxSize: 8 * 1024, //8kb
                    }
                },
                generator:{ 
                    //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
                    filename:'./imgs/[name].[hash:6][ext]',
                },
            },
            {
                test:/\.txt$/,
                type:"asset/source"
            },
            {
                test:/\.html$/,
                //处理html文件的img图片(负责引入img 从而被url-loader进行处理)
                loader:"html-loader"
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            minify:{
                collapseWhitespace:false, //移出空格
                removeComments:false, //移出注释
            }
        }),
        new MiniCssExtractPlugin({
            filename:'css/build.[contenthash:10].css',
        }),
    ],
    resolve:{
        alias:{
            "@":path.resolve(__dirname,"./src")
        },
        extensions:[".js",".json"]
    },
    mode:"none",
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
        open:true, //自动开发默认浏览器
        hot:true //开启hmr服务
    },
    devtool:'source-map'
}