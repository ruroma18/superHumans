const express = require('express');
const SuperpowerController = require('../controllers/superpowerController');

const superpowerRouter = express.Router();

superpowerRouter.post('/', SuperpowerController.createSuperpower);

superpowerRouter.get('/', SuperpowerController.getSuperpowers);

superpowerRouter.get('/:superpowerId', SuperpowerController.getSuperpower);

superpowerRouter.put('/:superpowerId', SuperpowerController.updateSuperpower);

superpowerRouter.delete('/:superpowerId', SuperpowerController.deleteSuperpower);

module.exports = superpowerRouter;
