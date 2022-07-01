const express = require('express');
const heroImgRouter = express.Router();

const imgUpload = require('../utils/imgUpload');
const heroImgController = require('../controllers/heroImgController');

heroImgRouter.post('/', imgUpload.single('image'), heroImgController.addImg);

heroImgRouter.get('/', heroImgController.findImages);

heroImgRouter.get('/:imgId', heroImgController.findImage);

heroImgRouter.delete('/:imgId', heroImgController.deleteImg);

module.exports = heroImgRouter;