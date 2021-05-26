const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { message, secret } = require('../../support');
const { validationResult } = require('express-validator');

class User {
  #schema = null
  constructor(schema) {
    this.#schema = schema;
  }

  login = async (req, res) => {
    const { login, password } = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return this.#setResponse(res, 400, {
          errors: message.invalidData,
          message: errors.array()
        });
      }

      const user = await this.#schema.findOne({ login });
      if (!user) {
        return this.#setResponse(res, 400, message.userNotFound);
      };

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return this.#setResponse(res, 400, message.invalidPass);
      }

      const token = jwt.sign(
        { userId: user.id },
        secret,
        { expiresIn: '10h' }
      );

      res.json({ token, userId: user.id });
    }
    catch (e) {
      this.#setResponse(res, 400, message.abstractErr);
    }
  }

  registration = async (req, res) => {
    const { login, password } = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return this.#setResponse(res, 400, {
          errors: message.invalidData,
          message: errors.array()
        });
      }

      const candidate = await this.#schema.findOne({ login });
      if (candidate) {
        return this.#setResponse(res, 400, message.userAlreadyReg);
      };

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new this.#schema({ login, password: hashedPassword });
      await user.save();
      this.#setResponse(res, 201, message.regSuccess);
    }
    catch (e) {
      this.#setResponse(res, 400, message.abstractErr);
    }
  }

  setting = async (req, res) => {
    try {
      const user = await this.#schema.findById({ _id: req.user.userId });
      if (req.body.password) {
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        user.password = hashedPassword;
        await user.save();
      }
      if (req.body.login) {
        user.login = req.body.login;
        await user.save();
      }
      this.#setResponse(res, 200, message.changed);
    }
    catch (e) {
      this.#setResponse(res, 400, message.abstractErr);
    }
  }

  #setResponse = (res, status, message) => {
    return res.status(status).json({
      message
    });
  }
}

module.exports = User;