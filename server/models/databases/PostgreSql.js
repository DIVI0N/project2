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
      const queryAll =
        "SELECT id, fname, lname, age, city, phonenumber, email, companyname, iduser FROM persons";
      // console.log("result", this.client.query);
      const result = await this.client.query(queryAll, []);
      response.json(result.rows);
    } catch (err) {
      console.error("Error", err);
    }
  }

  // TODO
  async create(newField, response) {
    try {
      this.client.connect();
      const queryCreate =
        "INSERT INTO persons (id, fname) VALUES ($1, $2) RETURNING *";
      const newField = new Field(req.body);
      const result = await this.client.query(queryCreate, [
        response.body.id,
        response.body.fname,
      ]);
      console.log("New field added", result.rows[0]);
      response.json(result.rows);
    } catch (err) {
      console.error("Error", err);
    }
  }

  async findById(response, id) {
    try {
      this.client.connect();
      const queryId = `SELECT * FROM persons WHERE id = ${id}`;
      const result = await this.client.query(queryId, []);
      response.json(result.rows);
      console.log("Found: ", result);
    } catch (err) {
      console.error("Error", err);
    }
  }
}

module.exports = new PostgreSql();
