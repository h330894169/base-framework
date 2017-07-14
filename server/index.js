'use strict';
const serve = require('koa-static');
const Koa = require('koa');
const config = require('../config');

const proxy = require('../server/middleware/proxy');
const koaBody = require('koa-body');
const router = require('./routers/index');

const app = new Koa();
// 顺序很关键
if(config.isDev){
  require('./middleware/webpack-load')(app);
}

app.use(koaBody());

app.use(router.routes());

app.use(serve(config.staticFile,{maxage: 1*24*60*60*1000,gzip:true}))

module.exports = proxy(app);