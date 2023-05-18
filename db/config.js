const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '974423',
    database: 'vuetest',
    connectionLimit: 10,
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
