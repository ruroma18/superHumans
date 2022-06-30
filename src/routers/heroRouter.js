const express = require('express');
const heroRouter = express.Router();

const HeroController = require('../controllers/heroController');
const { findHero } = require('../middlewares/heroMW');

heroRouter.post('/', HeroController.createHero);

heroRouter.get('/', HeroController.findHeroes);

heroRouter.get('/:heroId', findHero, HeroController.findHero);

heroRouter.put('/:heroId', findHero, HeroController.updateHero);

heroRouter.delete('/:heroId', findHero, HeroController.deleteHero);

module.exports = heroRouter;