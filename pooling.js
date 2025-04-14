const pool = require('./database');
const { performance } = require('perf_hooks');

async function main() {
    const start = performance.now(); //INICIO

    try {
        // Ejecutar una consulta usando promesas
        const [results] = await pool.query('SELECT * FROM estudiante');

        const end = performance.now();   //FIN 
        console.log(`Conexión con pooling - Tiempo de ejecución: ${(end - start).toFixed(2)} ms`); //MOSTRAR
        console.log('Resultados:', results);

        // Cerrar el pool (opcional, dependiendo de tu aplicación)
        await pool.end();
    } catch (error) {
        console.error('Error en la consulta:', error);
    }
}

main();