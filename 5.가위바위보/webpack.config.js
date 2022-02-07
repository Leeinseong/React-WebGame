const path = require('path');
const { webpack } = require('webpack');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    name: 'word-replay-setting',
    mode: 'development', //실서비스: production,
    devtool: 'eval', //빠르게
    resolve: {
        extensions: ['.js', '.jsx']
    },

    //중요
    entry: {
        app: ['./client'] // client.jsx 에서 WordRelay.jsx를 불러와서 추가 안해도 된다.
    },//입력

    module: {
        rules:[{
            test: /\.jsx?/, //js랑 jsx파일에
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules/'),
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR', 'last 2 chrome versions']
                        },
                    }], //자동으로 옛날 브라우저를 지원
                    '@babel/preset-react'
                ], //plugins들의 모음이 presets
                plugins: [
                    'react-refresh/babel'
                ],
            }
        }]
    },//모듈을 적용해서 output으로 뺀다.

    plugins: [
        new LoaderOptionsPlugin({ debug: true}), //options에 모두 debug: true를 추가한다.
        new RefreshWebpackPlugin(),
    ],

    output: {
        path: path.join(__dirname, 'dist'), //현재폴더 경로 + dist
        filename: 'app.js',
        publicPath: '/dist/',
    },//츨력

    devServer: {
        devMiddleware: { publicPath: '/dist' }, //webpack 생성 파일의 위치
        static: { directory: path.resolve(__dirname) }, //실제로 존재하는 경로
        hot: true
    }//핫리로딩 - 변경점을 캐치

}