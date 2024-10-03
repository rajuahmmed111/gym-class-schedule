import { Router } from 'express';
import { bookClassController, cancelBookingController, registerTraineeController } from './traineeController';

const router = Router();

router.post('/register', registerTraineeController);
router.post('/book', bookClassController);
router.post('/cancel', cancelBookingController);

export const traineeRoutes = router;
