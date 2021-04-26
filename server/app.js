const express = require('express')
const { mongoConnect } = require('./connected')
const { login, registration, database } = require('./routes')

const
  app = express(),
  PORT = 5000

app.use(express.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  next()
})

app.use('/login', login)
app.use('/registration', registration)
app.use('/database', database)

const connectDB = () => {
  try {
    mongoConnect()

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}
connectDB()

