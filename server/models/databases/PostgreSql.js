const pg = require("pg");
class PostgreSql {
  constructor() {
    this.config = {
      host: "localhost",
      user: "postgres",
      password: "FaJ_761FA",
      database: "postgresql_persons",
      port: 5432,
      ssl: false,
    };
    this.client = new pg.Client(this.config);
  }
  connect() {
    this.client.connect();
  }

  async getRequest(response) {
    try {
      this.client.connect();
      const queryAll = 'SELECT * FROM persons';
      const result = await this.client.query(queryAll, []);
      response.json(result.rows);
    } catch (err) {
      console.error("Error", err);
    }
  }

  async findById(response, id) {
    try {
      this.client.connect();
      const queryId = `SELECT * FROM persons WHERE id = ${id}`;
      const result = await this.client.query(queryId);
      response.json(result.rows);
      console.log("Found: ", result);
    } catch (err) {
      console.error("Error", err);
    }
  }

  async create(response, newField) {
    try {
      this.client.connect();
      const queryCreate = `INSERT INTO persons (id_user, fname, lname, age, city, phonenumber, email, companyname) VALUES (${newField.id_user}, '${newField.fname}', '${newField.lname}', ${newField.age}, '${newField.city}','${newField.phonenumber}', '${newField.email}', '${newField.companyname}') RETURNING *`;
      const result = await this.client.query(queryCreate);
      console.log("New person created", result.rows[0]);
      response.status(201).send(`New person created`);
    } catch (err) {
      console.error("Error", err);
    }
  }

  async updateById(response, newField, id) {
    try {
      this.client.connect();
      const queryUpdate = `UPDATE persons SET id = ${newField.id}, id_user = ${newField.id_user}, fname = '${newField.fname}', lname = '${newField.lname}', age = ${newField.age}, city = '${newField.city}', phonenumber = '${newField.phonenumber}', email = '${newField.email}', companyname = '${newField.companyname}' WHERE id = ${id};`;
      const result = await this.client.query(queryUpdate);
      console.log("New person updated", result.rows[0]);
      response.json(result.rows);
    } catch (err) {
      console.error("Error", err);
    }
  }

  async delete(response, id) {
    try {
      this.client.connect();
      const queryDelete = `DELETE FROM persons WHERE id=${id}`;
      const result = await this.client.query(queryDelete);
      response.status(200).send(`person with id: ${id} is deleted`);
    } catch (err) {
      console.error("Error", err);
    }
  }

  async clearAll(response) {
    try {
      this.client.connect();
      const queryClearAll = 'DELETE FROM persons';
      const result = await this.client.query(queryClearAll);
      response.status(200).send(`all persons are deleted`);
    } catch (err) {
      console.error("Error", err);
    }
  }
}

module.exports = new PostgreSql();
