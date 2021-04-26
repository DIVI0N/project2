const support = {
  setResponse: (res, status, message) => {
    return res.status(status).json({
      message
    });
  }
};

module.exports = support;