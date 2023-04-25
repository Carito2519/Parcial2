import express from 'express';
import roomsRouter from './routes/rooms.routes.js';
import bookingsRouter from './routes/bookings.routes.js';

const app = express();
app.use(express.json());
app.use('/rooms', roomsRouter);
app.use('/bookings', bookingsRouter);

app.listen(5000);

export default app;
