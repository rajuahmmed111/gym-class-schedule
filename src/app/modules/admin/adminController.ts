import { Request, Response } from 'express';
import { AdminService } from './adminService';

export const createTrainer = async (req: Request, res: Response) => {
  try {
    const trainer = await AdminService.createTrainer(req.body);
    res.status(201).json({
      success: true,
      message: 'Trainer created successfully',
      trainer,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ success: false, message: error.message });
    } else {
      res
        .status(400)
        .json({ success: false, message: 'An unknown error occurred' });
    }
  }
};

export const createClassSchedule = async (req: Request, res: Response) => {
  try {
    const schedule = await AdminService.createClassSchedule(req.body);
    res.status(201).json({
      success: true,
      message: 'Class schedule created successfully',
      schedule,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ success: false, message: error.message });
    } else {
      res
        .status(400)
        .json({ success: false, message: 'An unknown error occurred' });
    }
  }
};
