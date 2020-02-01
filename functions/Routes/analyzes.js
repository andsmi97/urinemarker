const router = require('express').Router();
const analyzes = require('../Controllers/Analyzes');
const authenticate = require('./auth');

router.post('/', authenticate, analyzes.create);
router.get('/', authenticate, analyzes.all);
router.get('/:id', authenticate, analyzes.one);

module.exports = router;
