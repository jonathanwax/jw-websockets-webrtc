(function () {
    'use strict';

    // define globals
    var express = require('express');
    var ioapp = require('socket.io');
    var http = require('http');
    var app = express();
    var server = http.createServer(app);
    var io = ioapp.listen(server);
    var path = require('path');
    var favicon = require('serve-favicon');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');
    var peerServer = require('peer').ExpressPeerServer;

    // set up our JSON API for later
    require('./routes/api')(app);

    // set up our socket server
    require('./sockets/socket')(io);

    // start the server
    server.listen(3000);
    console.log('server.listen(3000)');

    // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
    // app.all('*', function (req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //     res.header('Access-Control-Allow-Headers', 'Content-Type');
    //     next();
    // });

    // view engine setup (for later)
    //app.set('views', path.join(__dirname, 'views'));
    //app.set('view engine', 'jade');

    // middleware settings
    app.use(favicon(__dirname + '/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(require('stylus').middleware(path.join(__dirname, 'public')));

    // for dev
    //app.use(express.static(__dirname + '/angular-frontend/app/'));

    // for production, do 'grunt --force' and then comment the line above
    // and uncomment the line below

    //app.use(express.static(__dirname +  '/public'));
    
    // init peerjs server
    var peerOptions = {
        debug: true
    };
    app.use('/peerjs', peerServer(server, peerOptions));
    console.log('peer server started.');

    /// catch 404 and forwarding to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    /// error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });


    module.exports = app;

})();
