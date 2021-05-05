const mongoose = require('mongoose');

class Mongo {
  static async сonnect() {
    const pass = 'gDVte9iWH6Cyp6Mj';
    const url = `mongodb+srv://alex:${pass}@cluster0.bvt9i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  }
};

module.exports = Mongo;