var express = require('express');
const {join} = require('path');
const mountMiddleware = require('./mount-middleware');
const mountRoutes = require('./mount-routes');

// nodejs: toplevel function that is exportet below
// config: references to rest of pieces of system
// env: all env vars with which the program was started
function createExpressApp({config, env}) {
    const app = express(); // instantiates app

    // configure PUG
    app.set('views', join(__dirname, '..'));
    app.set('view engine', 'pug');

    mountMiddleware(app, env);
    mountRoutes(app, config);

    return app; // returns configured express app
}

module.exports = createExpressApp;
