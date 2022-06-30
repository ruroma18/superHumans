const { Hero } = require('../db/models');
const createError = require('http-errors');

module.exports.findHero = async (req, res, next) => {
  try {

    const { params: { heroId } } = req;

    const hero = await Hero.findByPk(heroId);

    if(!hero) {
      return next(createError(404, 'Hero not found'));
    }

    req.hero = hero;

    next();

  } catch (error) {
    next(error)

  }
}