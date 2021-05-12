const pg = require('pg');
const { message } = require('../../support');
class PostgreSql {
  constructor() {
    this.config = {
      host: 'localhost',
      user: 'postgres',
      password: 'FaJ_761FA',
      database: 'postgresql_persons',
      port: 5432,
      ssl: false,
    };
    this.client = new pg.Client(this.config);
    // this.client.connect();
  }


  async getRequest(req, res) {
    try {
      const userID = req.user.userId;
      const queryAll = `SELECT * FROM persons WHERE id_user = '${userID}'`;
      const result = await this.client.query(queryAll);
      this.#setResponse(res, 200, result.rows);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  async create(req, res) {
    try {
      const newField = req.body;
      const userID = req.user.userId;
      const queryAll = `SELECT * FROM persons WHERE id_user = '${userID}'`;
      const queryCreate = `INSERT INTO persons (id_user, fname, lname, age, city, phonenumber, email, companyname) VALUES ('${userID}', '${newField.fname}', '${newField.lname}', ${newField.age}, '${newField.city}','${newField.phonenumber}', '${newField.email}', '${newField.companyname}') RETURNING *`;
      await this.client.query(queryCreate);
      const result = await this.client.query(queryAll);
      this.#setResponse(res, 200, result.rows);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  async updateById(req, res) {
    try {
      const newField = req.body;
      const userID = req.user.userId;
      const queryUpdate = `UPDATE persons SET fname = '${newField.fname}', lname = '${newField.lname}', age = ${newField.age}, city = '${newField.city}', phonenumber = '${newField.phonenumber}', email = '${newField.email}', companyname = '${newField.companyname}' WHERE id_user = '${userID}' AND id = ${newField.id};`;
      await this.client.query(queryUpdate);
      const result = await this.client.query(`SELECT * FROM persons WHERE id_user = '${userID}'`);
      this.#setResponse(res, 200, result.rows);
    } catch (err) {
      console.log(err);
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  async delete(req, res) {
    const userID = req.user.userId;
    try {
      if (req.query.id === 'all') {
        return this.clearAll(req, res);
      }
      const queryDelete = `DELETE FROM persons WHERE id=${req.query.id} AND id_user = '${userID}'`;
      await this.client.query(queryDelete);
      this.#setResponse(res, 200, message.successDel);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  async clearAll(req, res) {
    const userID = req.user.userId;
    try {
      const queryClearAll = `DELETE FROM persons WHERE id_user = '${userID}'`;
      await this.client.query(queryClearAll);
      this.#setResponse(res, 200, message.successDel);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  #setResponse = (res, status, message) => {
    return res.status(status).json({
      message
    });
  }
}


module.exports = new PostgreSql();
