const express = require('express');
const router = express.Router();

const heroRouter = require('./heroRouter')
const superpowerRouter = require('./superpowersRouter');

router.use('/heroes', heroRouter);
router.use('/superpowers', superpowerRouter);

module.exports = router;