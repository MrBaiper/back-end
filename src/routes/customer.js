const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController')

router.post('/save',customerController.save);
router.get('/',customerController.list);





module.exports = router;