const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV || 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    devServer: {
        historyApiFallback: true,
        // inline: true,
        port: 3000,
        hot: true,
        proxy: {
            '/': {
                target: 'http://localhost:8080',
                changeOrigin: true,
            },
        },
    },
    entry: {
        app: path.join(__dirname,  './src/index.tsx'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            "@config": path.resolve(__dirname, "src/config/"),
            "@css": path.resolve(__dirname, "src/assets/css/"),
            "@scss": path.resolve(__dirname, 'src/assets/scss/'),
            "@image": path.resolve(__dirname, 'src/assets/img/'),
            "@component": path.resolve(__dirname, 'src/component/'),
            "@const": path.resolve(__dirname, "src/const/"),
            "@hook": path.resolve(__dirname, "src/hook/"),
            "@reactquery": path.resolve(__dirname, "src/reactquery/"),
            "@store": path.resolve(__dirname, "src/store/"),
            "@type": path.resolve(__dirname, "src/types/app/"),
            "@data": path.resolve(__dirname, "src/data/"),
            "@util": path.resolve(__dirname, "src/util/"),
            // "@dummy": path.resolve(__dirname, "src/dummy/")
            "@page": path.resolve(__dirname, "src/page/")
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: path.join(__dirname, "/node_modules/"),
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',

            },
            {
                test: /\.(scss|css)$/,
                use: [
                    process.env.NODE_ENV === "production"
                        ? MiniCssExtractPlugin.loader // 프로덕션 환경
                        : "style-loader", // 개발 환경
                    { loader: "css-loader", options: { sourceMap: true }},
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ]
            },
        ],
    },

    output: {
        filename: 'js/[name].bundle.js',
        // https://stackoverflow.com/questions/67723670/how-to-change-path-for-output-images-in-webpack-5
        assetModuleFilename: pathData => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filepath}/[name][ext]`;
        },
        path: path.join(__dirname, '../src/main/resources/static'),
        clean: true
    },

    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            // template: './public/index.html',
            template: './public/index.html',
            templateParameters: {
                env: mode === 'development' ? '(개발용)' : ''
            },
            minify: mode === 'production' ? {
                collapseWhitespace: true,
                removeComments: true
            }: false,
            favicon: 'public/favicon.ico',
        }),
        // new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build'],
        }),
        ...(process.env.NODE_ENV === "production"
            ? [
                new MiniCssExtractPlugin({
                    filename: `css/[name].css`,
                })
            ]
            : [])

    ],
};