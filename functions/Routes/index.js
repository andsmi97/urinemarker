const router = require('express').Router();

router.use('/analyzes', require('./analyzes'));
router.use('/image', require('./images'));

module.exports = router;
