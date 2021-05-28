const redis = require('redis');
const { message } = require('../../support');

class Redis {
  constructor() {
    this.connection = {
      host: 'localhost',
      port: 6379,
    };
  }

  connect = () => {
    this.client = redis.createClient(this.connection);
    this.client.on('connect', (err) => {
      if (err) {
        return new Error();
      }
      console.log('Redis connected');
    });
  };

  getRequest = async (req, res) => {
    const userID = req.user.userId;
    let data = [];
    await this.client.keys('*', (err, id) => {
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
              id_user: object.id_user,
              id: id[len],
              firstName: object.firstName,
              lastName: object.lastName,
              age: object.age,
              city: object.city,
              phone: object.phone,
              email: object.email,
              company: object.company,
            };
            data.push(tempData);
          }
          const newData = data.filter(el => el.id_user === userID);
          if (req.query.sort || req.query.sort !== 'id') {
            data.sort((a, b) => a[req.query.sort] > b[req.query.sort] ? 1 : -1);
          }
          if (i == keys.length) {
            this.#setResponse(res, 200, newData);
          }
        });
      });
    });
  };

  create = async (req, res) => {
    const userID = req.user.userId;
    const { firstName, lastName, age, city, phone, email, company } = req.body;
    let id = new Date().getTime();
    this.client.hmset(
      id,
      ['id_user',
        userID,
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
    const newField = req.body;
    const key = Object.keys(newField)[0];
    await this.client.hset(
      req.query.id,
      [
        `${key}`,
        `${newField[key]}`,
      ],
      (err) => {
        if (err) {
          this.#setResponse(res, 403, message.abstractErr);
        }
        this.#setResponse(res, 200, true);
      }
    );
  };

  delete = async (req, res) => {
    if (req.query.id === 'all') {
      return this.clearAll(req, res);
    }
    await this.client.del(req.query.id, (err) => {
      if (err) {
        return this.#setResponse(res, 403, message.abstractErr);
      }
      return this.#setResponse(res, 200, message.successDel);
    });
  };

  clearAll = async (req, res) => {
    await this.client.flushdb((err) => {
      if (err) {
        return this.#setResponse(res, 403, message.abstractErr);
      }
      return this.#setResponse(res, 200, message.successDel);
    });
  }

  #setResponse = (res, status, message) => {
    return res.status(status).json({
      message,
    });
  };
}

module.exports = new Redis();
