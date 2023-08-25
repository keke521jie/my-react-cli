const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js', '.jsx', '.tsx'], // 添加 '.jsx' 扩展
    },
    devServer: {
        port: 8080,
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader', // 使用 Babel 处理 JSX 和 ES6+
                        options: {
                            presets: ['@babel/preset-react']
                        }
                    },
                    {
                        loader: 'ts-loader' // 使用 ts-loader 处理 TypeScript
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                use: [
                    'file-loader'
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    'sass-loader',
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
}