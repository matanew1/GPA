const express = require('express');
const router = express.Router();
const transcriptController = require('../controllers/transcriptController');

// api route
router.get('/', transcriptController.loadHomePage);

module.exports = router;
