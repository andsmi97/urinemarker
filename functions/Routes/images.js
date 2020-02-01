const router = require('express').Router();
const images = require('../Controllers/Images');
const authenticate = require('./auth');

router.post('/', authenticate, images.upload);

module.exports = router;
