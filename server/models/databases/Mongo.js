const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  city: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  company: {
    type: String,
  }
}, { collection: 'person' });
const PersonSchema = model('Person', schema);
class Mongo {
  constructor(Person) {
    this.Person = Person;
  }

  static async сonnect() {
    const url = 'mongodb://localhost:27017/project2';
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  }

  getPerson = async (req, res) => {
    try {
      const person = await PersonSchema.find({ user: req.user.userId });
      this.#setResponse(res, 200, person);
    }
    catch (e) {

    }
  }

  setPerson = async (req, res) => {
    try {
      console.log(req.user);
      const person = new PersonSchema({ user: req.user.userId, ...req.body });
      await person.save();

      this.#setResponse(res, 200, { msg: 'ok' });
    }
    catch (e) {
      this.#setResponse(res, 403, { msg: e });
    }

  }
  #setResponse = (res, status, message) => {
    return res.status(status).json({
      message
    });
  }
};

module.exports = { Mongo, PersonSchema };