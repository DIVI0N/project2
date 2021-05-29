const { message } = require('../../../support');
const SQLite3 = require('sqlite3').verbose();

class Sqlite {
  constructor() {
    this.sqliteDB = new SQLite3.Database('./models/databases/Sqlite/project.db',
      (err) => {
        if (err) console.log(err);
        console.log('SQLite3 Connection Extablished');
      });
  }

  getPersons = (req, res) => {
    try {
      const userID = req.user.userId;
      const queryAll = `SELECT * FROM persons WHERE id_user = '${userID}'`;
      this.sqliteDB.all(queryAll, (err, result) => {
        if (err) return this.#setResponse(res, 403, message.abstractErr);
        if (req.query.sort || req.query.sort !== 'id') {
          result.sort((a, b) => a[req.query.sort] > b[req.query.sort] ? 1 : -1);
        }
        this.#setResponse(res, 200, result);
      });
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  postPerson = (req, res) => {
    try {
      const newField = req.body;
      const userID = req.user.userId;
      const queryCreate = `INSERT INTO persons (id_user, firstName, lastName, age, city, phone, email, company) VALUES ('${userID}', '${newField.firstName}', '${newField.lastName}', ${newField.age}, '${newField.city}','${newField.phone}', '${newField.email}', '${newField.company}')`;
      this.sqliteDB.run(queryCreate, this.#error);
      this.#get(req, res);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  updatePerson = (req, res) => {
    try {
      const newField = req.body;
      const key = Object.keys(newField)[0];
      const queryUpdate = `UPDATE persons SET "${key}" = '${newField[key]}' WHERE (id = ${req.query.id})`;
      this.sqliteDB.run(queryUpdate, this.#error);
      this.#get(req, res);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  deletePerson = (req, res) => {
    const userID = req.user.userId;
    try {
      if (req.query.id === 'all') {
        return this.clearAll(req, res);
      }
      const queryDelete = `DELETE FROM persons WHERE id=${req.query.id} AND id_user = '${userID}'`;
      this.sqliteDB.run(queryDelete, this.#error);
      this.#get(req, res);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  clearAll = (req, res) => {
    const userID = req.user.userId;
    try {
      const queryClearAll = `DELETE FROM persons WHERE id_user = '${userID}'`;
      this.sqliteDB.run(queryClearAll, this.#error);
      this.#setResponse(res, 200, message.successDel);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  #get = (req, res) => {
    const userID = req.user.userId;
    const queryAll = `SELECT * FROM persons WHERE id_user = '${userID}'`;
    this.sqliteDB.all(queryAll, (err, result) => {
      if (err) return this.#setResponse(res, 403, message.abstractErr);
      this.#setResponse(res, 200, result);
    });
  }

  #error = (err) => {
    if (err) this.#setResponse(res, 403, message.abstractErr);
  }

  #setResponse = (res, status, message) => {
    return res.status(status).json({
      message
    });
  }
}

module.exports = Sqlite;