const { Router } = require('express');
const postgresql = Router();
const PostgreSql = require('../models/model.js');

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'We cannot be missing content'
    });
  }

  const field = new Field({
    id: req.body.id,
    fname: req.body.fname,
    lname: req.body.lname,
    age: req.body.age,
    city: req.body.city,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    companyname: req.body.companyname,
    user_id: req.body.user_id,
  });


  Field.create(field, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Error'
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Field.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Что-то случилось во время получения всех пользователей'
      });
    else
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(data);
  });
};

exports.findOne = (req, res) => {
  Field.findById(req.params.user_id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found field with id ${req.params.user_id}.`
        });
      } else {
        res.status(500).send({
          message: 'Problem with getting person by id' + req.params.user_id
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content cannot be empty'
    });
  }

  Field.updateById(
    req.params.user_id,
    new Field(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Not found field with id ${req.params.user_id}.`
          });
        } else {
          res.status(500).send({
            message: 'Error updating field with id ' + req.params.user_id
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Field.delete(req.params.user_id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found field with ${req.params.user_id}.`
        });
      } else {
        res.status(500).send({
          message: 'Can not delete field with ' + req.params.user_id
        });
      }
    } else res.send({ message: 'The field was successfully deleted' });
  });
};

exports.clearAll = (req, res) => {
  Field.clearAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Something went wrong while deleting all fields'
      });
    else res.send({ message: 'All fields have been successfully deleted' });
  });
};

module.exports = postgresql;

// const { Router } = require('express');
// const postgresql = Router();
// const pg = require('pg');
// const PostgreSql = require('../databases.js');

// const config = {
//   host: 'localhost',
//   user: 'postgres',
//   password: 'FaJ_761FA',
//   database: 'postgresql_persons',
//   port: 5432,
//   ssl: false,
// };

// const client = new pg.Client(config);

// const getRequest = async (response) => {
//   try {
//     client.connect();
//     const sql = 'SELECT id, fname, lname, age, city, phonenumber, email, companyname, user_id FROM persons';
//     const result = await client.query(sql, []);
//     response.json(result.rows);
//     client.end();
//     console.log('Success request');
//     console.log(result.rows);
//     console.log(result.fields);
//   }
//   catch {
//     console.error('Error');
//   }
// };


// postgresql.get('/', (req, res, next) => {
//   console.log('Request received...');
//   getRequest(res);
// });

// module.exports = postgresql;

// const client = new pg.Client(config);

// const getRequest = async (response) => {
//   try {
//     client.connect();
//     const sql = 'SELECT id, fname, lname, age, city, phonenumber, email, companyname FROM persons';
//     const result = await client.query(sql, []);
//     response.json(result.rows);
//     client.end();
//     console.log('Success request');
//     console.log(result.rows);
//     console.log(result.fields);
//   }
//   catch {
//     console.error('Error');
//   }
// };

// const postRequest = async (response) => {
//   try {
//     client.connect();
//     const sql = 'INSERT INTO users (name, age) VALUES (?, ?)';
//     const person = ['Stan', 19];
//     const results = await client.query(sql, person);
//     response.send(200);
//     client.end();
//     console.log(results);

//     // const person = [2, 'Tom', 'hjm', 56, 'ffff', '77777', 'fgggg', 'ggggggg'];
//     // client.connect();
//     // const results = await client.query('INSERT INTO persons(id, fname, lname, age, city, phonenumber, email, companyname) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);', [person.id, person.fname, person.lname, person.age, person.city, person.phonenumber, person.email, person.companyname]);
//     // response.send(200);
//     // console.log(results);
//   }
//   catch {
//     console.error('Error');
//   }
// };

// module.exports = { getRequest };
// module.exports = { postRequest };

// postgresql.get('/', (req, res, next) => {
//   console.log('Request received...');
//   getRequest(res);
// });

// postgresql.post('/', (req, res, next) => {
//   console.log('Post request received...');
//   postRequest(res);
// });

// postgresql.put('/', (req, res, next) => {});

// postgresql.delete('/', (req, res, next) => {});