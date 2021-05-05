const { Router } = require('express');
const postgresql = Router();
const pg = require('pg');

const config = {
  host: 'localhost',
  user: 'postgres',
  password: 'FaJ_761FA',
  database: 'postgresql_persons',
  port: 5432,
  ssl: false,
};

const client = new pg.Client(config);

const getRequest = async (response) => {
  try {
    client.connect();
    const sql = 'SELECT id, fname, lname, age, city, phonenumber, email, companyname, user_id FROM persons';
    const result = await client.query(sql, []);
    response.json(result.rows);
    client.end();
    console.log('Success request');
    console.log(result.rows);
    console.log(result.fields);
  }
  catch {
    console.error('Error');
  }
};

module.exports = { getRequest };

postgresql.get('/', (req, res, next) => {
  console.log('Request received...');
  getRequest(res);
});

// postgresql.post('/', (req, res, next) => {
//   console.log('Post request received...');
//   postRequest(res);
// });

postgresql.put('/', (req, res, next) => {});

postgresql.delete('/', (req, res, next) => {});

module.exports = postgresql;


// module.exports = app => {
//   const notes = require('../routes/database/postgreSQL.js');

//   // Создание нового поля в таблице
//   app.post('/notes', notes.create);

//   // Получение всех полей дел сразу
//   app.get('/notes', notes.findAll);

//   //Получение отдельного поля из таблицы по id
//   app.get('/note/:user_id', notes.findOne);

//   // обновить поле по id
//   app.put('/note/:user_id', notes.update);

//   //Удалить поле по id
//   app.delete('/note/:user_id', notes.delete);

//   // Удалить сразу все поля
//   app.delete('/notes', notes.clearAll);
// };
