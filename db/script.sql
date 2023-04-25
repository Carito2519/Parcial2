CREATE SCHEMA parcial;
USE parcial;

CREATE TABLE habitaciones (
    codigo BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    numero INT NOT NULL,
    tipo VARCHAR(20),
    valor FLOAT
);

CREATE TABLE reservas (
    codigo BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    codigo_habitacion BIGINT UNSIGNED NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    fecha_reservacion DATE NOT NULL,
    fecha_entrada DATE NOT NULL,
    fecha_salida DATE NOT NULL,
    FOREIGN KEY (codigo_habitacion) REFERENCES habitaciones(codigo)
);