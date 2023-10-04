const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const { sequelize } = require('./models/index');
const cors = require('cors');
require('dotenv').config();
const middlewares = require('./middlewares/middlewares');
const { userModel } = require('./models/index')
const app = express();
const detailsRouter = require('./api/details')
const updateRouter = require('./api/update')
const imageRouter = require('./api/image')
const deleteRouter = require('./api/delete')
const insertRouter = require('./api/insert')


app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/details' , detailsRouter)
app.use('/update' , updateRouter)
app.use('/image' , imageRouter)
app.use('/insert' , insertRouter)
app.use('/delete' , deleteRouter)



sequelize.sync().then(() => {
  console.log('Connection succeeded');
});


app.get('/', async (req, res) => {

  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
