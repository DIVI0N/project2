const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('../../../persons.db', function (err) {
    if (err) console.log(err);
    console.log('connected to SQLIte');
})

db.all('SELECT * FROM persons', (err, data) => {
    console.log(data);
});

// db.run("INSERT INTO persons (fname, lname, age, city, phoneNumber, email, companyName, user_id, deleted) VALUES ('Ivan', 'Ivanov', 25, 'Dnepr', '12345678', 'ivan@gmail.com', 'WoW', 1, FALSE);")

// module.exports = new SQLite();