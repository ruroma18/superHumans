const express = require('express');
const heroRouter = express.Router();

const HeroController = require('../controllers/heroController');
const heroImgRouter = require('./heroImgRouter');
const { findHero } = require('../middlewares/heroMW');
const imgUpload = require('../utils/imgUpload');

heroRouter.post('/', imgUpload.array('image'), HeroController.createHero);

heroRouter.get('/', HeroController.findHeroes);

heroRouter.get('/:heroId', findHero, HeroController.findHero);

heroRouter.put('/:heroId', findHero, imgUpload.array('image'), HeroController.updateHero);

heroRouter.delete('/:heroId', findHero, HeroController.deleteHero);

heroRouter.use('/:heroId/img', findHero, heroImgRouter);

module.exports = heroRouter;