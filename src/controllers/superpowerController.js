const { Superpower } = require('../db/models');
const createError = require('http-errors');

module.exports.createSuperpower = async (req, res, next) => {
  try {

    const { body } = req;

    const superpower = await Superpower.create(body);

    if (!superpower) {
      return next(createError(400, 'Cannot create superpower'));
    }

    res.status(201).send({ data: superpower });

  } catch (error) {
    next(error)
  }
};

module.exports.getSuperpowers = async (req, res, next) => {
  try {

    const superpowers = await Superpower.findAll();

    if (!superpowers) {
      return next(createError(404, 'Superpowers not found'));
    }

    res.status(200).send({ data: superpowers });

  } catch (error) {
    next(error);
  }
};

module.exports.getSuperpower = async (req, res, next) => {
  try {

    const { params: { superpowerId } } = req;

    const superpower = await Superpower.findByPk(superpowerId);

    if (!superpower) {
      return next(createError(404, 'Superpower not found'));
    }

    res.status(200).send({ data: superpower });

  } catch (error) {
    next(error);
  }
};

module.exports.updateSuperpower = async (req, res, next) => {
  try {

    const { params: { superpowerId }, body } = req;

    const [updatedRow, [updatedSuperpower]] = await Superpower.update(body, { 
      where: { id: superpowerId },
      returning: true })

    if (updatedRow !== 1) {
      return next(createError(404, 'Superpower not found'));
    }

    res.status(200).send({ data: updatedSuperpower });

  } catch (error) {
    next(error);
  }
};

module.exports.deleteSuperpower = async (req, res, next) => {
  try {

    const { params: { superpowerId } } = req;

    const deletedRow = await Superpower.destroy({
      where: {id: superpowerId}
    });

    if (deletedRow !== 1) {
      return next(createError(404, 'Superpower not found'));
    }

    res.status(200).send({data: superpowerId})

  } catch (error) {
    next(error);
  }
};