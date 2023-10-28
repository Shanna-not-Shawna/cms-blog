const router = require('express').Router();

const namedRoutes = require('./named-routes.js');

router.use('/', namedRoutes);

module.exports = router;
