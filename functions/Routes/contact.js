const router = require('express').Router();
const contact = require('../Controllers/Contact');

router.post('/sendMessage', contact.sendMessage);
router.post('/subscribe', contact.subscirbe);
router.get('/unsubscribe/:id', contact.unsubscribe);

module.exports = router;
