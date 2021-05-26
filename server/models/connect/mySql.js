const alex = {
  host: 'localhost',
  user: 'root',
  password: 'admin',
  port: 3306,
  insecureAuth: true,
  options: { trustedConnection: true },
  database: 'baza_dannih'
};

const dima = {
  host: 'localhost',
  user: 'root',
  database: 'test_db',
  password: 'root',
  port: '3306'
};

module.exports = { alex, dima };