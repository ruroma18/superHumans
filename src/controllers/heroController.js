const createError = require('http-errors');
const { Hero } = require('../db/models')

module.exports.createHero = async (req, res, next) => {
  try {

    const { body } = req;

    const hero = await Hero.create(body);

    if (!hero) {
      return next(createError(400, 'Cannot create hero'));
    }

    res.status(201).send({ data: body });

  } catch (error) {
    next(error);
  }
};

module.exports.findHeroes = async (req, res, next) => {
  try {

    const heroes = await Hero.findAll();

    if (!heroes) {
      return next(createError(404, 'Heroes not found'));
    }

    res.status(200).send({ data: heroes });

  } catch (error) {
    next(error);
  }
};

module.exports.findHero = async (req, res, next) => {
  try {

    const { hero } = req;

    res.status(200).send({ data: hero })

  } catch (error) {
    next(error);
  }
};

module.exports.updateHero = async (req, res, next) => {
  try {

    const { hero, body } = req;

    const updatedHero = await hero.update(body, {
      returning: true
    })

    res.status(200).send(updatedHero);

  } catch (error) {
    next(error);
  }
};

module.exports.deleteHero = async (req, res, send) => {
  try {

    const { hero } = req;

    await hero.destroy();

    res.status(200).send(hero)

  } catch (error) {
    next(error);
  }
};