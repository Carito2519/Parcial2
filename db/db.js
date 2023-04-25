import * as dotenv from 'dotenv';
import { createPool } from 'mysql2/promise';
dotenv.config();

// create the connection to database
export const pool = createPool({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

export async function get() {
    const [rows, fields] = await pool.query('SELECT * FROM habitaciones');
    console.log(rows, fields);
}
