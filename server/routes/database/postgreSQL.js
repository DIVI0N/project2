const { Router } = require('express');
const postgresql = Router();

// module.exports = postgresql => {
//   const fields = require('./controllers/field.controller.js');

//   // Создание нового поля
//   postgresql.post('/fields', fields.create);

//   // Получение всех полей сразу
//   postgresql.get('/fields', fields.findAll);

//   postgresql.get('/', (req, res, next) => {
//     console.log('Request received...');
//     getRequest(res);
//   });

//   //Получение отдельного поля по id
//   postgresql.get('/field/:user_id', fields.findOne);

//   // обновить поле по id
//   postgresql.put('/field/:user_id', fields.update);

//   //Удалить поле по id
//   postgresql.delete('/field/:user_id', fields.delete);

//   // Удалить сразу все поля
//   postgresql.delete('/field', fields.clearAll);
// };

// module.exports = postgresql;

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