<<<<<<< HEAD
const mysql = require('mysql');
const { message } = require('../../support');
const { dima, alex } = require('../connect/mySql');
class MySql {
    constructor() {
        this.client = mysql.createConnection(alex);
    }
    connect = () => {
        this.client.connect();
    }

    async getRequest(req, res) {
        try {
            const userID = req.user.userId;
            const queryAll = `SELECT * FROM persons WHERE id_user = '${userID}'`;
            this.client.query(queryAll, (err, result) => {
                if (req.query.sort || req.query.sort !== 'id') {
                    result.sort((a, b) => a[req.query.sort] > b[req.query.sort] ? 1 : -1);
                }
                this.#setResponse(res, 200, result);
            });
        } catch (err) {
            this.#setResponse(res, 403, message.abstractErr);
        }
    }

    async create(req, res) {
        try {
            const newField = req.body;
            const userID = req.user.userId;
            const queryAll = `SELECT * FROM persons WHERE id_user = '${userID}'`;
            const queryCreate = `INSERT INTO persons (id_user, firstName, lastName, age, city, phone, email, company) VALUES ('${userID}', '${newField.firstName}', '${newField.lastName}', ${newField.age}, '${newField.city}','${newField.phone}', '${newField.email}', '${newField.company}')`;
            this.client.query(queryCreate);
            this.client.query(queryAll, (err, result) => {
                this.#setResponse(res, 200, result);
            });
        } catch (err) {
            this.#setResponse(res, 403, message.abstractErr);
        }
    }

    async updateById(req, res) {
        try {
            const newField = req.body;
            const userID = req.user.userId;
            const key = Object.keys(newField)[0];
            const queryUpdate = `UPDATE persons SET ${key} = '${newField[key]}' WHERE id = ${req.query.id}`;
            this.client.query(queryUpdate);
            const result = this.client.query(`SELECT * FROM persons WHERE id_user = '${userID}'`);
            this.#setResponse(res, 200, result);
        } catch (err) {
            console.log(err);
            this.#setResponse(res, 403, message.abstractErr);
        }
    }

    async delete(req, res) {
        const userID = req.user.userId;
        try {
            if (req.query.id === 'all') {
                return this.clearAll(req, res);
            }
            const queryDelete = `DELETE FROM persons WHERE id=${req.query.id} AND id_user = '${userID}'`;
            await this.client.query(queryDelete);
            this.#setResponse(res, 200, message.successDel);
        } catch (err) {
            this.#setResponse(res, 403, message.abstractErr);
        }
    }

    async clearAll(req, res) {
        const userID = req.user.userId;
        try {
            const queryClearAll = `DELETE FROM persons WHERE id_user = '${userID}'`;
            await this.client.query(queryClearAll);
            this.#setResponse(res, 200, message.successDel);
        } catch (err) {
            this.#setResponse(res, 403, message.abstractErr);
        }
    }

    #setResponse = (res, status, message) => {
        return res.status(status).json({
            message
        });
    }
}

module.exports = new MySql();
=======
class MySql {

};

module.exports = MySql;
>>>>>>> 6e0ced22beb5f68dc22d0da7b5090bb3cddfdae9
