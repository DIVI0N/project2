const mongoose = require('mongoose')

async function mongoConnect() {
  const pass = 'gDVte9iWH6Cyp6Mj'
  const url = `mongodb+srv://alex:${pass}@cluster0.bvt9i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })

}

module.exports = mongoConnect