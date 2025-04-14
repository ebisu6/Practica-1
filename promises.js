const mysql = require('mysql2/promise');
const { performance } = require('perf_hooks');

// Configuración de la base de datos
const config = {
    host: 'localhost',
    user: 'root',
    password: '', // Coloca tu contraseña si la tienes
    database: 'bd_estudiante'
};

async function main() {
    const start = performance.now();  //INICIO

    try {
        // Crear una conexión con promesas
        const connection = await mysql.createConnection(config);

        // Ejecutar una consulta
        const [rows] = await connection.query('SELECT * FROM estudiante');

        const end = performance.now(); //FIN
        console.log(`Conexión con promesas - Tiempo de ejecución: ${(end - start).toFixed(2)} ms`);
        console.log('Resultados:', rows);

        // Cerrar la conexión
        await connection.end();
    } catch (error) {
        console.error('Error en la conexión o consulta:', error);
    }
}

main();