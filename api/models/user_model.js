const { db } = require('../common/sequalize');
const { User } = db;
const config = require('../../config/config');

let userModel = {
  insertRecord,
  findAllRecords,
  findRecordById,
  checkUserEmailExist,
};

function insertRecord(param) {
  return new Promise((resolve, reject) => {
    User.create({
      first_name: param.first_name,
      last_name: param.last_name,
      introduction: param.introduction,
      email: param.email,
      phone_code: param.phone_code,
      phone: param.phone,
      experience: param.experience ? param.experience : 0,
      achievements: param.achievements ? param.achievements : null,
    })
      .then(function (data) {
        param.user = data;
        resolve(param);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function findAllRecords(param) {
  return new Promise((resolve, reject) => {
    User.findAll()
      .then(function (data) {
        param.users = data;
        resolve(param);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function findRecordById(param) {
  return new Promise((resolve, reject) => {
    User.findOne({ where: { id: param.id } })
      .then(function (data) {
        param.user = data;
        resolve(param);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function checkUserEmailExist(param) {
  return new Promise((resolve, reject) => {
    User.findOne({
      where: { email: param.email },
    })
      .then(function (data) {
        if (data) {
          reject(new Error(config.messages.userAlreadyExists));
        } else {
          resolve(param);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = userModel;
