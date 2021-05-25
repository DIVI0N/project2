const redis = require('redis');
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
    // this.client.hmset('persons', {
    //   firstName: 'Jhon',
    //   lastName: 'Doe',
    //   age: 45,
    //   city: 'Amala',
    //   phone: '+3999999999',
    //   email: 'ddd@gmail.com',
    //   company: 'ZZZ',
    // });
  }

  // getRequest = async (req, res) => {
  //     await this.client.get('persons', (err, object) => {
  //     console.log(err);
  //     this.#setResponse(res, 200, object);
  //     console.log('persons get', object);
  //   });
  // }

  // create = async (req, res) => {
  //   try {
  //     const newField = req.body;
  //     let id = new Date().getTime();
  //     // const userID = req.user.userId;
  //     const createPerson = {
  //       id: id,
  //       // id_user: `${userID}`,
  //       firstName: `${newField.firstName}`,
  //       lastName: `${newField.lastName}`,
  //       age: `${newField.age}`,
  //       city: `${newField.city}`,
  //       phone: `${newField.phone}`,
  //       email: `${newField.email}`,
  //       company: `${newField.company}`
  //     };
  //     await this.client.get('persons', async (err, object) => {
  //       console.log(err);
  //       console.log(object);
  //       const oldValues = JSON.parse(object);
  //       await this.client.set('persons', JSON.stringify([...oldValues || '', createPerson]), (err, result) => {
  //         this.#setResponse(res, 200, createPerson);
  //       });
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     this.#setResponse(res, 403, message.abstractErr);
  //   }
  // }

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

  // #setResponse = (res, status, message) => {
  //   return res.status(status).json({
  //     message,
  //   });
  // };

  getRequest = async (req, res) => {
    // const userID = req.user.userId;
    let data = [];
    await this.client.keys('*', (err, id) => {
      let multi = this.client.multi();
      let keys = Object.keys(id);
      let i = 0;
      if (keys.length == 0) {
        res.send(data);
      }
      keys.forEach((len) => {
        this.client.hgetall(id[len], (err, object) => {
          i++;
          if (err) {
            console.log(err);
          } else {
            let tempData = {
              id: id[len],
              firstName: object.firstName,
              lastName: object.lastName,
              age: object.age,
              city: object.age,
              phone: object.phone,
              email: object.email,
              company: object.company,
            };
            data.push(tempData);
          }
          if (i == keys.length) {
            this.#setResponse(res, 200, data);
            console.log(data);
          }
        });
      });
    });
  };

  create = async (req, res) => {
    // const userID = req.user.userId;
    const { firstName, lastName, age, city, phone, email, company } = req.body;
    let id = new Date().getTime();
    await this.client.hmset(
      id,
      [
        'firstName',
        firstName,
        'lastName',
        lastName,
        'age',
        age,
        'city',
        city,
        'phone',
        phone,
        'email',
        email,
        'company',
        company,
      ],
      (err, reply) => {
        if (err) {
          this.#setResponse(res, 403, message.abstractErr);
        }
        this.#setResponse(res, 200, reply);
      }
    );
  };

  update = async (req, res) => {
    const { firstName, lastName, age, city, phone, email, company } = req.body;
    await this.client.hmset(
      req.query.id,
      [
        'firstName',
        firstName,
        'lastName',
        lastName,
        'age',
        age,
        'city',
        city,
        'phone',
        phone,
        'email',
        email,
        'company',
        company,
      ],
      (err, reply) => {
        if (err) {
          this.#setResponse(res, 403, message.abstractErr);
        }
        this.#setResponse(res, 200, true);
      }
    );
  };

  delete = async (req, res) => {
    await this.client.del(req.query.id, (err, reply) => {
      if (err) {
        return this.#setResponse(res, 403, message.abstractErr);
      }
      return this.#setResponse(res, 200, message.successDel);
    });
  };

  #setResponse = (res, status, message) => {
    return res.status(status).json({
      message,
    });
  };
}

module.exports = new Redis();
