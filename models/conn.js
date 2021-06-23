

const host = process.env.DB_host;
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const pgp = require('pq-promise')({
    query: function (event) {
        console.log("QUERY:", event.query);
    }
});

const options = {
    host,
    database,
    user,
    password
}

const db = pgp(options);

module.exports = db;