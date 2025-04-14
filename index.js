const pool = require('./database');
const { performance } = require('perf_hooks');

// Función para medir el tiempo de ejecución
async function measureTime(callback) {
    const start = performance.now();
    await callback();
    const end = performance.now();
    return (end - start).toFixed(2);
}

// Conexión básica
async function basicConnection() {
    const mysql = require('mysql2');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '', // Coloca tu contraseña si la tienes
        database: 'bd_estudiante'
    });

    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM estudiante', (err, results) => {
            if (err) reject(err);
            connection.end();
            resolve(results);
        });
    });
}

// Conexión con promesas
async function promiseConnection() {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '', // Coloca tu contraseña si la tienes
        database: 'bd_estudiante'
    });

    const [rows] = await connection.query('SELECT * FROM estudiante');
    await connection.end();
    return rows;
}

// Conexión con pooling (corregida)
async function poolConnection() {
    try {
        const [results] = await pool.query('SELECT * FROM estudiante');
        return results;
    } catch (error) {
        throw error;
    }
}

// Función principal
async function main() {
    try {
        // Medir tiempo de conexión básica
        const basicTime = await measureTime(async () => {
            const results = await basicConnection();
            console.log('Conexión básica - Resultados:', results);
        });
        console.log(`Conexión básica - Tiempo de ejecución: ${basicTime} ms`);

        // Medir tiempo de conexión con promesas
        const promiseTime = await measureTime(async () => {
            const results = await promiseConnection();
            console.log('Conexión con promesas - Resultados:', results);
        });
        console.log(`Conexión con promesas - Tiempo de ejecución: ${promiseTime} ms`);

        // Medir tiempo de conexión con pooling
        const poolTime = await measureTime(async () => {
            const results = await poolConnection();
            console.log('Conexión con pooling - Resultados:', results);
        });
        console.log(`Conexión con pooling - Tiempo de ejecución: ${poolTime} ms`);

        // Mostrar resumen
        console.log('\nResumen de tiempos de ejecución:');
        console.table({
            'Conexión básica': `${basicTime} ms`,
            'Conexión con promesas': `${promiseTime} ms`,
            'Conexión con pooling': `${poolTime} ms`
        });
    } catch (error) {
        console.error('Error en la aplicación:', error);
    }
}

// Ejecutar la aplicación
main();