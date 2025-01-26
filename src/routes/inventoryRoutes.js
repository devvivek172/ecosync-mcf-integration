const express = require('express');
const { syncInventory } = require('../controllers/inventoryController');

const router = express.Router();

router.get('/sync', syncInventory);

module.exports = router;
