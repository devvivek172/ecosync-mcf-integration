const express = require('express');
const { processReturn } = require('../controllers/returnController');

const router = express.Router();

router.post('/process', processReturn);

module.exports = router;
