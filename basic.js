const mysql = require('mysql2');
const { performance } = require('perf_hooks');

const config = {
    host: 'localhost',
    user: 'root',
    password: '', // Coloca tu contraseña si la tienes
    database: 'bd_estudiante'
};

const connection = mysql.createConnection(config);

// Medición de tiempo para el UPDATE
const startUpdate = performance.now();

connection.query(
    'UPDATE estudiante SET nombre = ? WHERE id = ?',
    ['Nuevo Nombre', 1], // Cambia el ID y el nombre según tu base de datos
    (err, result) => {
        if (err) {
            console.error('Error en la actualización:', err);
            return;
        }
        const endUpdate = performance.now();
        console.log(`Tiempo de ejecución UPDATE: ${(endUpdate - startUpdate).toFixed(2)} ms`);
        console.log('Filas afectadas:', result.affectedRows);

        // Ahora realizamos la consulta SELECT
        const startSelect = performance.now(); //INICIO
        connection.query('SELECT * FROM estudiante', (err, results) => {
            if (err) {
                console.error('Error en la consulta:', err);
                return;
            }

            const endSelect = performance.now();
            console.log(`Tiempo de ejecución SELECT: ${(endSelect - startSelect).toFixed(2)} ms`);
            console.log('Resultados:', results);

            connection.end(); //FIN
        });
    }
);
