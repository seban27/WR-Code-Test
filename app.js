const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const { db } = require('./api/common/sequalize');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const specs = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API with Swagger',
      version: '0.1.0',
    },
    components: {
      securitySchemes: {
        Authorization: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      security: {
        Authorization: [],
      },
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(specs);

const userRouter = require('./routes/user');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

db.sequelize.sync({ force: false, alter: false }).then(
  function () {
    console.log('MYSQL connected');
  },
  function (err) {
    console.log(err);
  }
);

app.use('/user', userRouter);

module.exports = app;
