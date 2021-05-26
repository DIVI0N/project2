const cassandra = require('cassandra-driver');
const { message } = require('../../support');

class Cassandra {
  constructor() {
    this.cassandraClient = new cassandra.Client({ contactPoints: ['127.0.0.1:9042'], localDataCenter: 'datacenter1', keyspace: 'project2' });
  }

  connect = () => {
    this.cassandraClient.connect((err, result) => {
      if (err) console.log('cassandra connect error is: ', err);
      console.log('Cassandra Connection Extablished');
    });
  }

  async getRequest(req, res) {
    try {
      const userID = req.user.userId;
      const queryAll = `SELECT * FROM persons WHERE user = '${userID}' ALLOW FILTERING`;
      const result = await this.cassandraClient.execute(queryAll, []);
      if (req.query.sort || req.query.sort !== 'id') {
        result.rows.sort((a, b) => a[req.query.sort] > b[req.query.sort] ? 1 : -1);
      }
      this.#setResponse(res, 200, result.rows);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  async create(req, res) {
    try {
      const newField = req.body;
      const userID = req.user.userId;
      const queryAll = `SELECT * FROM persons WHERE user = '${userID}' ALLOW FILTERING`;
      const queryCreate = `INSERT INTO persons (id,user, "firstName", "lastName", age, city, phone, email, company) VALUES (uuid(),'${userID}', '${newField.firstName}', '${newField.lastName}', '${newField.age}', '${newField.city}','${newField.phone}', '${newField.email}', '${newField.company}')`;
      await this.cassandraClient.execute(queryCreate, []);
      const result = await this.cassandraClient.execute(queryAll, []);

      this.#setResponse(res, 200, result.rows);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  async updateById(req, res) {
    try {
      const newField = req.body;
      const userID = req.user.userId;
      const key = Object.keys(newField)[0];
      const queryUpdate = `UPDATE persons SET "${key}" = '${newField[key]}' WHERE (id = ${req.query.id})`;
      await this.cassandraClient.execute(queryUpdate, []);
      const result = await this.cassandraClient.execute(`SELECT * FROM persons WHERE user = '${userID}' ALLOW FILTERING`, []);
      this.#setResponse(res, 200, result.rows);
    } catch (err) {
      console.log(err);
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  async delete(req, res) {
    try {
      if (req.query.id === 'all') {
        return this.clearAll(req, res);
      }
      const queryDelete = `DELETE FROM persons WHERE id=${req.query.id}`;
      await this.cassandraClient.execute(queryDelete);
      this.#setResponse(res, 200, message.successDel);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  async clearAll(req, res) {
    try {
      const userID = req.user.userId;
      const queryAll = `SELECT * FROM persons WHERE user = '${userID}' ALLOW FILTERING`;
      const result = await this.cassandraClient.execute(queryAll, []);

      const usersPerson = result.rows.map(el => el.id);
      usersPerson.forEach(async (el) => {
        const queryDelete = `DELETE FROM persons WHERE id=${el}`;
        await this.cassandraClient.execute(queryDelete);
      });
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

module.exports = Cassandra;