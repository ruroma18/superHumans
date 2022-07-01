require('dotenv').config();
const express = require('express');
const router = require('./routers')
const { imgPath } = require('./constants')

const app = express();

app.use(express.json());
app.use('/api', router);
app.use('/images', express.static(imgPath))

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});