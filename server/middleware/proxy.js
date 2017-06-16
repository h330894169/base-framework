/**
 * Created by jerryli on 2017/6/15.
 */
const httpProxy = require('http-proxy');
const conf = require('../../config');
const log  = require('../utils/logFactory').getLogger('proxy');
const proxy = httpProxy.createProxyServer({});
module.exports = (app) => {
     return (req, res) => {
        if (req.url.indexOf(conf.restPrefix) !== -1) {
            log.info(`proxy-url:${req.url}`);
            proxy.web(req, res, {
                target: conf.proxyTarget
            });
        }else {
            return app.callback()(req, res);
        }
    }
}