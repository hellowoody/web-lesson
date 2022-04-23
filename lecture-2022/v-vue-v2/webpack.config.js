import path from "path";
import {fileURLToPath} from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";        //把html文件打包
import MiniCssExtractPlugin from "mini-css-extract-plugin"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
    entry:"./src/index.js",
    output:{
        filename:"./js/built.[hash:8].js",
        clean:true
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
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
        open:false, //自动开发默认浏览器
        hot:true //开启hmr服务
    },
    resolve:{
        alias:{
            "vue":"vue/dist/vue.esm-bundler.js"
        }
    },
    mode:"development",
    devtool:"source-map"
}