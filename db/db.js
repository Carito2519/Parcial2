import * as dotenv from 'dotenv';
import { createPool } from 'mysql2/promise';
dotenv.config();

// create the connection to database
export const pool = createPool({
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
});

export async function get() {
    const [rows, fields] = await pool.query('SELECT * FROM habitaciones');
    console.log(rows, fields);
}
