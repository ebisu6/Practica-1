-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS bd_estudiante;
USE bd_estudiante;

-- Crear la tabla estudiante
CREATE TABLE IF NOT EXISTS `estudiante` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellidoPaterno` varchar(140) NOT NULL,
  `apellidoMaterno` varchar(140) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `Ci` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Insertar datos de prueba
INSERT INTO `estudiante` (`nombre`, `apellidoPaterno`, `apellidoMaterno`, `correo`, `Ci`) VALUES
('Joel', 'Cosme', 'Choque', 'jk@gmail.com', '1234452'),
('Daniela', 'Quisbert', 'Sanjinez', 'daniel2@gmail.com', '223232323323'),
('Juan', 'dasd', 'dsad', 'dasdsd@dad', '32332'),
('Carla', 'Mejillas', 'Taliz', 'carlaM@gmail.com', '3233232'),
('Mario', 'Mamani', 'Soliz', 'MArioM@gmail.com', '4344443434');

UPDATE `estudiante` SET `nombre`='MARIA' WHERE id=1