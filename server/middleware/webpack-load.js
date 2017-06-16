/**
 * Created by jerryli on 2017/6/16.
 */
const webpack = require('webpack');
const chalk = require('chalk');
const koaWebpack = require('koa-webpack');
const config = require('../../config');
const webpackConfig = require('../../webpack.base');

webpackConfig.entry.client = [
    'webpack-hot-middleware/client?reload=true',
    webpackConfig.entry.client
];
class LogPlugin {
    constructor(port) {
        this.port = port;
    }

    apply(compiler) {
        compiler.plugin('done', () => {
            const address = `http://localhost:${this.port}`;
            console.log(`> basic framework is running at ${chalk.yellow(address)}\n`);
        });
    }
}
webpackConfig.plugins.push(new LogPlugin(config.port));
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
const clientCompiler = webpack(webpackConfig);
const middleware = koaWebpack({
    compiler: clientCompiler,
    dev: {
        quiet: false,
        stats: {
            colors: true,
            chunks: false
        }
    }
});

module.exports = app => {
    // 等待webpack中间件加载好之后才渲染服务
    app.use(async function(ctx, next) {
        await new Promise((resolve, reject) => {
            middleware.dev.waitUntilValid(() => {
                resolve();
            });
        });
        await next();
    });

    app.use(middleware);
}