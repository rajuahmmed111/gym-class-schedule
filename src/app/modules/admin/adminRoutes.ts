import { Router } from 'express';
import { createTrainer, createClassSchedule } from './adminController';
// import { authMiddleware, isAdmin } from '../../middleware/authMiddleware';

const router = Router();

router.post('/create-trainer', createTrainer);
router.post('/create-class-schedule', createClassSchedule);

export const adminRoutes =  router;
