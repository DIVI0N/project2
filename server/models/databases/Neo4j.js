const neo4j = require('neo4j-driver');

neo4jConf = {
  login: 'neo4j',
  password: 'neo4j',
  path: 'bolt://localhost'
};
class NEO4J {
  constructor() {
    this.driver = neo4j.driver('bolt://localhost:11005', neo4j.auth.basic('neo4j', 'neo4j'));
  }
  getPersons = (req, res) => {
    const session = this.driver.session();
    let persons = [];
    const userID = req.user.userId;
    session
      .run(`MATCH (n) WHERE n.id_user = "${userID}" RETURN n`)
      .then(function (result) {
        result.records.forEach(function (record) {
          var person = record._fields[0].properties;
          person.id = record._fields[0].identity.low; //записывает ид персоны, автоинкремент
          persons.push(person);
        });
        if (req.query.sort || req.query.sort !== 'id') {
          persons.sort((a, b) => a[req.query.sort] > b[req.query.sort] ? 1 : -1);
        }
        return res.status(200).json({ message: persons });
      })
      .then(() => session.close())
      .catch((e) => {
        session.close();
        res.status(400).json({ message: 'bad request' });
      });
  }
  postPerson = (req, res) => {
    const session = this.driver.session();
    const userID = req.user.userId;
    session.run(`CREATE (n:Person {firstName: "${req.body.firstName}", lastName: "${req.body.lastName}", 
        age: "${req.body.age}", city: "${req.body.city || ''}", phone: "${req.body.phoneNumber || ''}", email: "${req.body.email}", 
        company: "${req.body.companyName || ''}", id_user: "${userID}"})`)
      .then(() => {
        session.close();
        return res.status(200).json({ message: 'accept' });
      }).catch(() => {
        session.close();
        res.status(400).json({ message: 'bad request' });
      });
  }
  deletePerson = (req, res) => {
    const session = this.driver.session();
    session.run(this.#checkTableID(req))
      .then(() => {
        session.close();
        return res.status(200).json({ message: 'done' });
      }).catch(() => {
        session.close();
        res.status(400).json({ message: 'bad request' });
      });
  }
  updatePerson = (req, res) => {
    const newField = req.body;
    const key = Object.keys(newField)[0];
    const session = this.driver.session();
    session.run(`MATCH (n) WHERE id(n) = ${req.query.id} SET n.${key} = "${newField[key]}"`)
      .then(() => {
        session.close();
        return res.status(200).json({ message: 'done' });
      }).catch(() => { res.status(400).json({ message: 'bad request' }); });
  }

  #checkTableID = (req) => {
    const userID = req.user.userId;
    switch (req.query.id) {
      case 'all': return `MATCH (n:Person) WHERE n.id_user = "${userID}" DETACH DELETE n`;
      default: return `MATCH (n:Person) WHERE ID(n) = ${req.query.id} DETACH DELETE n`;
    }
  }

}

module.exports = NEO4J;