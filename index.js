import express from 'express';
import roomsRouter from './routes/rooms.routes.js';
import bookingsRouter from './routes/bookings.routes.js';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use('/rooms', roomsRouter);
app.use('/bookings', bookingsRouter);

app.listen(process.env.PORT);
console.log(`Escuchando en puerto ${process.env.PORT}`);

export default app;
