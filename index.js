
/**
 *
 */

var express = require('express')
  , rendr = require('rendr'),
  request=require('request')
  ,_ = require('underscore');

var siteInfo={
  user:[],
  catalog:[],

};
/**
 *
 */

var config = require('config');

/**
 *
 */

var app = express();

/**
 * stack
 */

app.use(express.compress());
app.use(express.static(__dirname + '/public'));
app.use(express.logger());
app.use(express.bodyParser());


var rendrServer = rendr.createServer({
  dataAdapterConfig: config.api,
  appData: config.appData,
});

app.use(rendrServer);

rendrServer.configure(function(rendrExpressApp) {
  rendrExpressApp.use(function(req, res, next) {
    if (req.siteInfo && !req.rendrApp.get('siteInfo')) {
      req.rendrApp.set('user', req.siteInfo);
    }
    res.header('Access-Control-Allow-Origin', '*');

    next();
  });
});

p=process.env.PORT  || config.server.port;

app.listen(p);

console.log('server listening on port '+p+'.....');

exports.app = app;


