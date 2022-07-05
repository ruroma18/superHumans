const createError = require('http-errors');
const { Hero, HeroImg, Superpower } = require('../db/models')

module.exports.createHero = async (req, res, next) => {
  try {

    const { files, body: { superpowerArray, ...heroBody } } = req;

    const hero = await Hero.create(heroBody);

    if (superpowerArray) {
      const superpowers = [];
      superpowerArray.map((superpower) => superpowers.push({ body: superpower }));
      const createdSuperpowers = await Superpower.bulkCreate(superpowers)
      await hero.addSuperpowers(createdSuperpowers);
    }

    await files.map((file) => hero.createHeroImg({ imgPath: file.filename }));

    if (!hero) {
      return next(createError(400, 'Cannot create hero'));
    }

    res.status(201).send({ data: { hero } });

  } catch (error) {
    next(error);
  }
};

module.exports.findHeroes = async (req, res, next) => {
  try {

    const heroes = await Hero.findAll({include: [Superpower, HeroImg]})

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

    const foundedHero = await Hero.findByPk(hero.id, {include: [Superpower, HeroImg]})

    res.status(200).send({ data: foundedHero })

  } catch (error) {
    next(error);
  }
};

module.exports.updateHero = async (req, res, next) => {
  try {

    const { hero, files, body: { superpowerArray, ...heroBody } } = req;

    const updatedHero = await hero.update(heroBody, {
      returning: true
    });

    if (superpowerArray) {
      const superpowers = [];
      superpowerArray.map((superpower) => superpowers.push({ body: superpower }));
      const createdSuperpowers = await Superpower.bulkCreate(superpowers)
      await hero.addSuperpowers(createdSuperpowers);
    }

    await files.map((file) => hero.createHeroImg({ imgPath: file.filename }));

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