const router = require('express').Router();
const contact = require('../Controllers/Contact');

router.post('/sendMessage', contact.create);
router.post('/subscribe', contact.all);
router.patch('/unsubscribe/:id', contact.all);

module.exports = router;
