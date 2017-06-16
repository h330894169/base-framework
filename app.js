/**
 * Created by jerryli on 2017/6/15.
 */
'use strict';
const http = require('http');
const app  = require('./server');
const config = require('./config');
const log  = require('./server/utils/logFactory').getLogger('app');

let server = http.createServer(app).listen(config.port);

log.info(`app start..run at:http://127.0.0.1:${config.port}`);