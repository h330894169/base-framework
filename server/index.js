'use strict';
const serve = require('koa-static');
const Koa = require('koa');
const config = require('../config');

const proxy = require('../server/middleware/proxy');
const koaBody = require('koa-body');
const router = require('./routers/index');

const app = new Koa();
// 顺序很关键
require('./middleware/webpack-load')(app);

app.use(koaBody());

app.use(router.routes());

app.use(serve(config.staticFile))

module.exports = proxy(app);