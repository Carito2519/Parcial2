import { pool } from '../db/db.js';

export async function createBooking(req, res) {
    const {
        codigo_habitacion,
        nombre,
        telefono,
        fecha_reservacion,
        fecha_entrada,
        fecha_salida,
    } = req.body;
    try {
        await pool.query(
            'INSERT INTO reservas(codigo_habitacion, nombre, telefono, fecha_reservacion, fecha_entrada, fecha_salida) VALUES(?, ?, ?, ?, ?, ?)',
            [
                codigo_habitacion,
                nombre,
                telefono,
                fecha_reservacion,
                fecha_entrada,
                fecha_salida,
            ]
        );
        res.sendStatus(201);
    } catch (error) {
        res.status(400);
        res.json({ message: error.sqlMessage });
    }
}

export async function updateBooking(req, res) {
    const {
        codigo_habitacion,
        nombre,
        telefono,
        fecha_reservacion,
        fecha_entrada,
        fecha_salida,
    } = req.body;
    try {
        await pool.query(
            'UPDATE reservas SET codigo_habitacion=?, nombre=?, telefono=?, fecha_reservacion=?, fecha_entrada=?, fecha_salida=? WHERE codigo=?',
            [
                codigo_habitacion,
                nombre,
                telefono,
                fecha_reservacion,
                fecha_entrada,
                fecha_salida,
                req.params.id,
            ]
        );
        res.sendStatus(201);
    } catch (error) {
        res.status(400);
        res.json({ message: error.sqlMessage });
    }
}

export async function deleteBooking(req, res) {
    try {
        await pool.query('DELETE FROM reservas WHERE codigo=?', [
            req.params.id,
        ]);
        res.sendStatus(201);
    } catch (error) {
        res.status(400);
        res.json({ message: error.sqlMessage });
    }
}
