const uuid = require('uuid');

// sets up values we want on every request
function primeRequestContext(req, res, next) {
    req.context = {
        traceId: uuid.v4()
    }

    next();
}

module.exports = primeRequestContext;
