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
  }


  async getRequest(res) {
    try {
      this.client.connect();
      const queryAll = 'SELECT * FROM persons';
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

      this.client.connect();
      const queryCreate = `INSERT INTO persons (id_user, fname, lname, age, city, phonenumber, email, companyname) VALUES (${userID}, '${newField.fname}', '${newField.lname}', ${newField.age}, '${newField.city}','${newField.phonenumber}', '${newField.email}', '${newField.companyname}') RETURNING *`;
      const result = await this.client.query(queryCreate);
      // console.log('New person created', result.rows[0]);
      this.#setResponse(res, 200, message.success);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  async updateById(req, res) {
    try {
      const newField = req.body;
      const userID = req.user.userId;

      this.client.connect();
      const queryUpdate = `UPDATE persons SET id = ${newField.id}, id_user = ${userID}, fname = '${newField.fname}', lname = '${newField.lname}', age = ${newField.age}, city = '${newField.city}', phonenumber = '${newField.phonenumber}', email = '${newField.email}', companyname = '${newField.companyname}' WHERE id = ${newField.id};`;
      const result = await this.client.query(queryUpdate);

      this.#setResponse(res, 200, result.rows);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  async delete(req, res) {
    try {
      if (req.query.id === 'all') {
        return this.clearAll(res);
      }
      this.client.connect();
      const queryDelete = `DELETE FROM persons WHERE id=${req.query.id}`;
      await this.client.query(queryDelete);
      this.#setResponse(res, 200, message.successDel);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  async clearAll(res) {
    try {
      this.client.connect();
      const queryClearAll = 'DELETE FROM persons';
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