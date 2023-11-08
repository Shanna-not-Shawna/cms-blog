const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', namedRoutes);
router.use('/api', apiRoutes);

module.exports = router;
