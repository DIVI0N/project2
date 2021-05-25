const redis = require('redis');
require('dotenv').config();
const { message } = require('../../support');

class Redis {
  constructor() {
    this.connection = {
      host: 'localhost',
      port: 6379,
    };
    this.client = redis.createClient(this.connection);
    this.client.on('connect', (err) => {
      if (err) {
        return new Error();
      }
      console.log('Redis connected');
    });
  }

  // getRequest = async (req, res) => {
  //   let return_dataset = [];
  //   await this.client.keys('*', (err, id) => {
  //     let multi = this.client.multi();
  //     let keys = Object.keys(id);
  //     let i = 0;
  //     if (keys.length == 0) {
  //       res.send(return_dataset);
  //     }
  //     keys.forEach((l) => {
  //       this.client.hgetall(id[l], (e, o) => {
  //         i++;
  //         if (e) {
  //           console.log(e);
  //         } else {
  //           var temp_data = {
  //             'id': id[l],
  //             'firstName': o.firstName,
  //             'lastName': o.lastName,
  //             'age': o.age
  //           };
  //           return_dataset.push(temp_data);
  //         }
  //         if (i == keys.length) {
  //           res.send(return_dataset);
  //         };
  //       });
  //     });
  //   });
  // };

  getRequest = async (req, res) => {
      await this.client.get('persons', (err, object) => {
      this.#setResponse(res, 200, object);
      console.log('persons get', object);
    });
  }

  create = async (req, res) => {
    try {
      const newField = req.body;
      let id = new Date().getTime();
      const userID = req.user.userId;
      const createPerson = {
        id: id,
        id_user: `${userID}`,
        firstName: `${newField.firstName}`,
        lastName: `${newField.lastName}`,
        age: `${newField.age}`,
        city: `${newField.city}`,
        phone: `${newField.phone}`,
        email: `${newField.email}`,
        company: `${newField.company}`
      };
    //   redis.add_set({key: {'id': id}, data: extract}, function (resp) {
    //     if (resp){
    //         return callback({err: false, response: 'Data was added successfully '}, 200);
    //     }else{
    //         return callback({err: true, response: 'User was not added successfully '}, 400);
    //     }
    // });
        await this.client.get('persons', async (err, object) => {
        console.log(err);
        console.log(object);
        const oldValues = JSON.parse(object);
        await this.client.set({'persons': JSON.stringify([...oldValues, createPerson])}, (err, result) => {
          this.#setResponse(res, 200, createPerson);
        });
      });
      // await this.client.get('persons', async (err, object) => {
      //   console.log(err);
      //   console.log(object);
      //   const oldValues = JSON.parse(object);
      //   await this.client.set('persons', JSON.stringify([...oldValues, createPerson]), (err, result) => {
      //     this.#setResponse(res, 200, createPerson);
      //   });
      // });
    } catch (err) {
      console.log(err);
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  delete = async (req, res) => {
    await this.client.del(req.query.id, (err, reply) => {
      console.log(reply);
      res.send('User deleted successfully');
    });
  };

  // async updateById(req, res, next) {
  //   try {
  //     const newField = req.body;
  //     let id = new Date().getTime();
  //     // const userID = req.user.userId;
  //     const createPerson = {
  //       id: id,
  //       // id_user: `${userID}`,
  //       firstName: `${newField.firstName}`,
  //       lastName: `${newField.lastName}`,
  //       age: `${newField.age}(integer)`,
  //       city: `${newField.city}`,
  //       phone: `${newField.phone}`,
  //       email: `${newField.email}`,
  //       company: `${newField.company}`
  //     };
  //     await this.client.hmset('persons', req.params.id, createPerson);
  //     this.#setResponse(res, 200, 'persons');
  //   } catch (err) {
  //     this.#setResponse(res, 403, message.abstractErr);
  //   }
  // }

  #setResponse = (res, status, message) => {
    return res.status(status).json({
      message,
    });
  };
}

module.exports = new Redis();
