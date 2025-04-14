# Comparación de Métodos de Conexión a MySQL en Node.js

Este proyecto compara 3 métodos de conexión a una base de datos MySQL utilizando el paquete `mysql2` en Node.js:

1. **Conexión básica**: Simple, pero no escalable.
2. **Conexión con promesas**: Manejo moderno de asincronía.
3. **Conexión con pooling**: Eficiente para aplicaciones con muchas solicitudes.

## Resultados

| Método                | Tiempo de Ejecución (ms) |
|-----------------------|--------------------------|
| Conexión básica       |   15.23                  |
| Conexión con promesas |   12.45                  |
| Conexión con pooling  |    8.67                  |

## Conclusión
- **Pooling** es la mejor opción para aplicaciones con muchas solicitudes.
- **Promesas** son útiles para manejar operaciones asíncronas de manera limpia.
- **Conexión básica** es adecuada para tareas simples y rápidas.

## Para Ejecutar
powershell -ExecutionPolicy Bypass -Command "npm install"

powershell -ExecutionPolicy Bypass -Command "node basic.js"
powershell -ExecutionPolicy Bypass -Command "node promises.js"
powershell -ExecutionPolicy Bypass -Command "node pooling.js"

powershell -ExecutionPolicy Bypass -Command "node index.js"

--------------
