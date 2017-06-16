/**
 * Created by jerryli on 2017/6/15.
 */
'use strict';
const log4js = require('log4js');
const conf = require('../../config');
class LogFactory {
    constructor(){
        log4js.configure(conf.logConfPath, { reloadSecs: 300 });
    }
    getLogger(category = 'app') {
        return log4js.getLogger(category);
    }
}
const logFactory = new LogFactory();
module.exports = logFactory;