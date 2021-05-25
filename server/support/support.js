const jwt = require('jsonwebtoken');
const { message, secret } = require('./constants');

const support = {
  setResponse: (res, status, message) => {
    return res.status(status).json({
      message
    });
  },

  authToken: (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.sendStatus(401).json(message.authFail);
    jwt.verify(token, secret, (err, user) => {
      if (err) return res.sendStatus(401).json(message.authFail);
      req.user = user;
      next();
    });
  },

  dbConnected: (app, port, arrDB) => {
    try {
      arrDB.forEach(async (el) => {
        await el.сonnect();
      });
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    } catch (e) {
      throw new Error(e);
    }
  },
};

module.exports = support;