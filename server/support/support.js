
const support = {
  setResponse: (res, status, message) => {
    return res.status(status).json({
      message
    });
  },

  dbConnected: async (app, port, arrDB) => {
    try {
      arrDB.forEach(el => {
        el.сonnect();
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