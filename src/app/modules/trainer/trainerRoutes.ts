import { Router } from 'express';
import { authMiddleware, isAdmin } from '../../middleware/authMiddleware';
import {
  createTrainer,
  deleteTrainer,
  getAssignedSchedules,
  updateTrainer,
} from './trainerController';

const router = Router();

// Admin routes for Trainer management
router.post('/create', authMiddleware, isAdmin, createTrainer);
router.put('/update/:id', authMiddleware, isAdmin, updateTrainer);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteTrainer);

// Trainer routes
router.get('/schedules', getAssignedSchedules);

export const trainerRoutes = router;
