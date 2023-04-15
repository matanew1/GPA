const express = require('express');
const router = express.Router();
const transcriptController = require('../controllers/transcriptController');

router.get('/', transcriptController.loadHomePage);

router.get('/add-data', (req, res) => {res.render('add-data'); });

router.post('/add-data', transcriptController.addData);

module.exports = router;
