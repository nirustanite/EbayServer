const express = require('express');
const User = require('./User/model')
const Products = require('./Products/model')

const app = express();

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Listening on port ${port}`));