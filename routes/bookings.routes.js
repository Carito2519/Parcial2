import { Router } from 'express';
import {
    createBooking,
    deleteBooking,
    updateBooking,
} from '../controllers/bookings.controller.js';
const router = Router();

router.post('/', createBooking);
router.patch('/:id', updateBooking);
router.delete('/:id', deleteBooking);

export default router;
