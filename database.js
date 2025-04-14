const mysql = require('mysql2/promise');

const config = {
    host: 'localhost',
    user: 'root',
    password: '', // Coloca tu contraseña si la tienes
    database: 'bd_estudiante',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(config);

// Función para probar la conexión
async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Conexión exitosa a la base de datos');
        connection.release();
    } catch (error) {
        console.error('Error de conexión:', error);
    }
}

testConnection(); // Probar la conexión al iniciar

module.exports = pool; // Exportar el pool para usarlo en otros archivos