const Field = require('../models/field.model.js');

// создаем и сохраняем новое поле
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'We cannot be missing content',
    });
  }

  // создание своего поля
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
        message: err.message || 'Error',
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Field.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Something happened while getting all users',
      });
    else res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'origin, content-type, accept'
    );
    res.send(data);
  });
};

// Найти одно поле по одному user_id
exports.findOne = (req, res) => {
  Field.findById(req.params.user_id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found field with id ${req.params.user_id}.`,
        });
      } else {
        res.status(500).send({
          message: 'Problem with getting person by id' + req.params.user_id,
        });
      }
    } else res.send(data);
  });
};

// Обновление пользователя по user_id
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content cannot be empty',
    });
  }

  Field.updateById(req.params.user_id, new Field(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found field with id ${req.params.user_id}.`,
        });
      } else {
        res.status(500).send({
          message: 'Error updating field with id ' + req.params.user_id,
        });
      }
    } else res.send(data);
  });
};

// удалить поле по user_id
exports.delete = (req, res) => {
  Field.delete(req.params.user_id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found field with ${req.params.user_id}.`,
        });
      } else {
        res.status(500).send({
          message: 'Can not delete field with ' + req.params.user_id,
        });
      }
    } else res.send({ message: 'The field was successfully deleted' });
  });
};

// Удалить все поля из таблицы
exports.clearAll = (req, res) => {
  Field.clearAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Something went wrong while deleting all fields',
      });
    else res.send({ message: 'All fields have been successfully deleted' });
  });
};
