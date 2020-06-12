const uuid = require('uuid/v4');

// sets up values we want on every request
function primeRequestContext(req, res, next) {
    req.context = {
        traceId: uuid()
    }

    next();
}

module.exports = primeRequestContext;
