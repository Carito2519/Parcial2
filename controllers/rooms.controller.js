import { pool } from '../db/db.js';

export async function getRooms(req, res) {
    const [result] = await pool.query('SELECT * FROM habitaciones');
    res.json(result);
}

export async function getRoom(req, res) {
    const [result] = await pool.query(
        'SELECT * FROM habitaciones WHERE codigo = ?',
        [req.params.id]
    );
    if (result.length > 0) {
        res.json(result[0]);
    } else {
        res.status(404);
        res.json({ message: 'Habitación no encontrada.' });
    }
}
