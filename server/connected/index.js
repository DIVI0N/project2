const mongoConnect = require('./mongoDb');

const connect = (app, port) => {
  try {
    mongoConnect();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = connect;


