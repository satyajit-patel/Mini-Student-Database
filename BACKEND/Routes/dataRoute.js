const express = require('express');
const router = express.Router();
const createList = require('../Controller/createList');
const readList = require('../Controller/readList');

router.post('/list', createList);
router.get('/list', readList);

module.exports = router;