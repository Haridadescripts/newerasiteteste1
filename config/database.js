const mysql = require('mysql2/promise');

const connectionString = "mysql://avnadmin:AVNS_FQWQn9zWawacH4W4zfm@mysql-3e10c638-jp0889323-7ef3.e.aivencloud.com:23418/defaultdb?ssl-mode=REQUIRED";

const pool = mysql.createPool(connectionString);

// Teste de conexão
pool.getConnection()
    .then(connection => {
        console.log('Conectado ao banco de dados MySQL com sucesso!');
        connection.release();
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

module.exports = pool;