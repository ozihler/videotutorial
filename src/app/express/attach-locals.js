function attachLocals(req, res, next) {
    res.locals.context = req.context; // makes context available for rendering the UI
    next();
}

module.exports = attachLocals;
