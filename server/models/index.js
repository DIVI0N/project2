const User = require("./User");
const { Mongo, PostgreSql } = require('./databases');

module.exports = {
  User,
  Mongo,
  PostgreSql
};