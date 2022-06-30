const express = require('express');
const router = express.Router();

const heroRouter = require('./heroRouter')

router.use('/heroes', heroRouter);

module.exports = router;