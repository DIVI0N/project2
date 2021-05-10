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
      // const sql = "SELECT * FROM persons";
      this.client.connect();
      const queryAll = "SELECT * FROM persons";
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
      const queryCreate = `INSERT INTO persons (fname, lname, age, city, phonenumber, email, companyname, id_user) VALUES ('${newField.fname}', '${newField.lname}', ${newField.age}, '${newField.city}','${newField.phonenumber}', '${newField.email}', '${newField.companyname}', ${newField.id_user}) RETURNING *`;
      const result = await this.client.query(queryCreate);
      console.log("New person created", result.rows[0]);
      response.json(result.rows);
    } catch (err) {
      console.error("Error", err);
    }
  }

  // TODO
  async updateById(response, newField) {
    try {
      this.client.connect();
      const queryUpdate = `UPDATE persons SET fname='${newField.fname}', lname='${newField.lname}', age=${newField.age}, city='${newField.city}', phonenumber=${newField.phonenumber}, email='${newField.email}', companyname='${newField.companyname}', id_user=${newField.id_user};`;
      const result = await this.client.query(queryUpdate);
      console.log("New person updated", result.rows[0]);
      response.json(result.rows);
      // response.status(200).send(`person with ${id} updated `);
    } catch (err) {
      console.error("Error", err);
    }
  }

  async delete(response, id) {
    try {
      this.client.connect();
      const queryDelete = `DELETE FROM persons WHERE id=${id}`;
      const result = await this.client.query(queryDelete);
      console.log("Delete person, id: ", id);
      response.status(200).send(`person with ${id} is deleted`);
    } catch (err) {
      console.error("Error", err);
    }
  }

  async clearAll(response) {
    try {
      this.client.connect();
      const queryClearAll = "DELETE FROM persons";
      const result = await this.client.query(queryClearAll);
      response.status(200).send(`all persons are deleted`);
    } catch (err) {
      console.error("Error", err);
    }
  }
}

module.exports = new PostgreSql();
