/**
 * Created by jerryli on 2017/6/15.
 */
'use strict';

const fs = require('fs');
const router = require('koa-router')();
const log = require('../utils/logFactory').getLogger('router');
const path = require('path');


router.get('*',async (ctx, next) =>{
    log.info(ctx.url);
    next()
});

//TODO 这里遍历route目录注册路由，同时，绑定对应的controller
const routerPath = path.resolve(__dirname);
const controllerPath = path.resolve(__dirname,"../controllers");
const routes = fs.readdirSync(routerPath) || [];
let tempController = '';
routes.forEach((file) => {
    const fileNameParser = path.parse(file);
    if (fileNameParser.ext === '.js' && file !== 'index.js') {
        tempController = path.resolve(controllerPath, file);
        require(path.join(routerPath, file))(router, fs.existsSync(tempController) ? require(tempController) : null)
    }
});

module.exports = router;