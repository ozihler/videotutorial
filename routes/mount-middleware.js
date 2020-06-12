const express = require('express');
const {join} = require('path');
const attachlocals = require('./attach-locals');
const lastResortErrorHandler = require('./last-resort-error-handler');
const primeRequestContext = require('./prime-request-context');

// middle ware are part of the request/response cycle > don't actually handle the request
function mountMiddleware(app, env) {
    app.use(lastResortErrorHandler);
    app.use(primeRequestContext);
    app.use(attachlocals);
    app.use(
        //express static === Express own middleware (to serve js and css files)
        express.static(join(__dirname, '..', 'public'), {maxAge: 86400000})
    );
}

module.exports = mountMiddleware;
