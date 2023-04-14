const express = require('express');
const bodyParser = require('body-parser');
const transcriptRoutes = require('./routes/transcriptRoutes');
const {PORT} = require('../config/env');

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', transcriptRoutes);

// App listen
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/api`);
});
