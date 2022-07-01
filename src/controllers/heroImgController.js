const { HeroImg } = require('../db/models');
const createError = require('http-errors');

module.exports.addImg = async (req, res, next) => {
  try {

    const { file: { filename }, hero } = req;

    const image = await hero.createHeroImg({ imgPath: filename });

    if (!image) {
      return next(createError(400, 'Cannot add image'));
    }

    res.status(200).send({ data: image });

  } catch (error) {
    next(error);
  }
};

module.exports.findImages = async (req, res, next) => {
  try {

    const { hero } = req;

    const images = await hero.getHeroImgs();

    if (!images) {
      return next(createError(404, 'Images not found'));
    }

    res.status(200).send({ data: images });

  } catch (error) {
    next(error);
  }
};

module.exports.findImage = async (req, res, next) => {
  try {
    const { hero: { id: heroId }, params: { imgId } } = req;

    const image = await HeroImg.findByPk(imgId, { where: { heroId } });

    if (!image) {
      return next(createError(404, 'Image not found'));
    }

    res.status(200).send({ data: image });

  } catch (error) {
    next(error);
  }
};

module.exports.deleteImg = async (req, res, next) => {
  try {

    const { hero: { id: heroId }, params: { imgId } } = req;

    const deletedImageRow = await HeroImg.destroy({ where: { id: imgId, heroId } });

    if (deletedImageRow !== 1) {
      return next(createError(400, 'Image not found'));
    }

    res.status(200).send({ data: { id: imgId } })

  } catch (error) {
    next(error)
  }
};
