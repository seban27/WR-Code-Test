const userModel = require('../models/user_model');
const config = require('../../config/config');
const logger = require('../common/logger');

let userController = {
  insertRecord,
  findAllRecords,
  findRecordById,
};

function insertRecord(req, res, next) {
  let params = req.body;
  if (
    params.first_name &&
    params.last_name &&
    params.introduction &&
    params.email &&
    params.phone_code &&
    params.phone
  ) {
    userModel
      .checkUserEmailExist(params)
      .then(userModel.insertRecord)
      .then((result) => {
        const response = {
          data: { user: result.user },
          message: config.messages.success,
        };
        res.send(response);
      })
      .catch((error) => {
        const response = { error: {}, message: error.message };
        res.send(response);
        logger.error(error);
      });
  } else {
    const response = {
      error: {},
      message: config.messages.fieldMissing,
    };
    res.send(response);
  }
}

function findAllRecords(req, res, next) {
  let params = {};
  userModel
    .findAllRecords(params)
    .then((result) => {
      const response = {
        data: { ...result },
        message: config.messages.success,
      };
      res.send(response);
    })
    .catch((error) => {
      const response = { error: {}, message: error.message };
      res.send(response);
      logger.error(error);
    });
}

function findRecordById(req, res, next) {
  let params = req.params;
  userModel
    .findRecordById(params)
    .then((result) => {
      const response = {
        data: { user: result.user },
        message: config.messages.success,
      };
      res.send(response);
    })
    .catch((error) => {
      const response = { error: {}, message: error.message };
      res.send(response);
      logger.error(error);
    });
}

module.exports = userController;
