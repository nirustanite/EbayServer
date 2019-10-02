const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./User/router');
const productRouter = require('./Products/router');

const app = express();
const corsMiddleware = cors()
const parserMiddleware = bodyParser.json()
const port = process.env.PORT || 4000


app.use(corsMiddleware);
app.use(parserMiddleware);
app.use(userRouter);
app.use(productRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));