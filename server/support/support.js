
const support = {
  setResponse: (res, status, message) => {
    return res.status(status).json({
      message
    });
  },
  validator: (email, errors) => {
    const emailName = email.trim().split('@')[0];
    if (emailName.length < 4 || emailName.length > 20) {
      return false;
    }
    if (!errors.isEmpty()) {
      return false;
    }
    return true;
  }
};

module.exports = support;