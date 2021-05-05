const client = require('../models/databases/PostgreSql');

class Field {
  constructor(id, fname, lname, age, city, phonenumber, email, companyname, user_id) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.city = city;
    this.phonenumber = phonenumber;
    this.email = email;
    this.companyname = companyname;
    this.user_id = user_id;
  }

  getAll(result) {
    const queryAll = 'SELECT id, fname, lname, age, city, phonenumber, email, companyname, user_id FROM persons';
    client.query(queryAll, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log('persons: ', res);
      result(null, res);
    });
  }

  create(newNote, result) {
    const queryCreate = 'INSERT INTO persons SET ?';
    client.query(queryCreate, newNote, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      console.log('New note added', { id: res.insertId, ...newNote });
      result(null, { id: res.insertId, ...newNote });
    });
  }

  findById(noteId, result) {
    client.query(
      `SELECT * FROM persons WHERE user_id = ${user_id}`,
      (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(err, null);
          return;
        }
        if (res.length) {
          console.log('Found: ', res[0]);
          result(null, res[0]);
          return;
        }
        result({ kind: 'not_found' }, null);
      }
    );
  }

  updateById(user_id, person, result) {
    const queryUpdate = 'UPDATE persons SET text = ? WHERE user_id = ?';
    client.query(queryUpdate, [person.text, user_id], (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: 'not_found' }, null);
        return;
      }

      console.log('Update', { user_id: user_id, ...person });
      result(null, { user_id: user_id, ...person });
    });
  }

  delete(user_id, result) {
    const queryDelete = 'DELETE FROM persons WHERE user_id = ?';
    client.query(queryDelete, user_id, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: 'not_found' }, null);
        return;
      }
      console.log('Delete person ', user_id);
      result(null, res);
    });
  }

  clearAll(result) {
    const queryClearAll = 'DELETE FROM persons';
    client.query(queryClearAll, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log(`deleted ${res.affectedRows} persons`);
      result(null, res);
    });
  }
}

module.exports = Field;