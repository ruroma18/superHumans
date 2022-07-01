const express = require('express');
const heroRouter = express.Router();

const HeroController = require('../controllers/heroController');
const heroImgRouter = require('./heroImgRouter');
const { findHero } = require('../middlewares/heroMW');

heroRouter.post('/', HeroController.createHero);

heroRouter.get('/', HeroController.findHeroes);

heroRouter.get('/:heroId', findHero, HeroController.findHero);

heroRouter.put('/:heroId', findHero, HeroController.updateHero);

heroRouter.delete('/:heroId', findHero, HeroController.deleteHero);

heroRouter.use('/:heroId/img', findHero, heroImgRouter);

module.exports = heroRouter;