const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const { message } = require('../../support');

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

  static async connect() {
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
      if (req.query.sort || req.query.sort !== '_id') {
        person.sort((a, b) => a[req.query.sort] > b[req.query.sort] ? 1 : -1);
      }
      this.#setResponse(res, 200, person);
    }
    catch (e) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  setPerson = async (req, res) => {
    try {
      const person = new PersonSchema({ user: req.user.userId, ...req.body });
      await person.save();
      this.#setResponse(res, 200, message.success);
    }
    catch (e) {
      this.#setResponse(res, 403, { msg: message.abstractErr });
    }
  }

  updatePerson = async (req, res) => {
    const userId = req.user.userId;
    try {
      await PersonSchema.findOneAndUpdate({ _id: req.query.id, user: userId }, { $set: { ...req.body } });
      const person = await PersonSchema.find({ user: req.user.userId });
      this.#setResponse(res, 200, person);
    }
    catch (e) {
      this.#setResponse(res, 400, message.abstractErr);
    }
  }

  deletePerson = async (req, res) => {
    try {
      if (req.query.id === 'all') {
        await PersonSchema.deleteMany({ user: req.user.userId });
        return this.#setResponse(res, 200, message.successDel);
      }
      await PersonSchema.findByIdAndDelete({ _id: req.query.id });
      const person = await PersonSchema.find({ user: req.user.userId });
      this.#setResponse(res, 200, person);
    }
    catch {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  #setResponse = (res, status, message) => {
    return res.status(status).json({
      message
    });
  }
};

module.exports = { Mongo, PersonSchema };
