const router = require('express').Router();

router.use('/analyzes', require('./analyzes'));
router.use('/image', require('./images'));
router.use('/contact', require('./contact'));
module.exports = router;
