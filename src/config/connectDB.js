const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '77.37.35.23',
    user: 'u416597400_guser',
    password: 'AdminR@123#',
    database: 'u416597400_game',
});

export default connection;