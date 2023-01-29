const router = require('express').Router();
const noteCtrl = require('../controllers/noteCtrl');
const auth = require('../middleware/auth');

router.route('/').get(auth, noteCtrl.getNotes).post(auth, noteCtrl.createNote);

module.exports = router;