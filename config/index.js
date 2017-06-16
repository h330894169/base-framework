/**
 * Created by jerryli on 2017/6/15.
 */
const path = require('path');

const projectDir = process.cwd();

module.exports = {
    // 服务端配置
    port: 3000,
    projectDir :  projectDir,
    logConfPath: path.resolve(projectDir, './config/log4js.json'),
    staticFile: path.resolve(projectDir, './static'),
    restPrefix: 'rest',
    proxyTarget: 'http://eggjs.org/',
    NODE_ENV: process.env,


    // 客户端配置
    publicPath: '//cdn.com/',
    srcPath: path.resolve(projectDir, './client'),
    outputPath: path.resolve(projectDir, './static'),
    target: 'web'
}