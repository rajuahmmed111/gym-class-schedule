/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { TrainerService } from './trainerService';

export const createTrainer = async (req: Request, res: Response) => {
  try {
    const trainer = await TrainerService.createTrainer(req.body);
    res.status(201).json({
      success: true,
      message: 'Trainer created successfully',
      trainer,
    });
  } catch (error: any) {
    res
      .status(400)
      .json({ success: false, message: error.message || 'An error occurred' });
  }
};

export const updateTrainer = async (req: Request, res: Response) => {
  try {
    const updatedTrainer = await TrainerService.updateTrainer(
      req.params.id,
      req.body,
    );
    res.status(200).json({
      success: true,
      message: 'Trainer updated successfully',
      updatedTrainer,
    });
  } catch (error: any) {
    res
      .status(400)
      .json({ success: false, message: error.message || 'An error occurred' });
  }
};

export const deleteTrainer = async (req: Request, res: Response) => {
  try {
    await TrainerService.deleteTrainer(req.params.id);
    res
      .status(200)
      .json({ success: true, message: 'Trainer deleted successfully' });
  } catch (error: any) {
    res
      .status(400)
      .json({ success: false, message: error.message || 'An error occurred' });
  }
};

export const getAssignedSchedules = async (req: Request, res: Response) => {
  try {
    const schedules = await TrainerService.getAssignedSchedules(req.user.id);
    res
      .status(200)
      .json({
        success: true,
        message: 'Assigned schedules retrieved successfully',
        schedules,
      });
  } catch (error: any) {
    res
      .status(400)
      .json({ success: false, message: error.message || 'An error occurred' });
  }
};

// export const getAssignedSchedules = async (req: Request, res: Response) => {
//   try {
//     if (!req.user || !req.user.id) {
//       return res
//         .status(400)
//         .json({ success: false, message: 'User not authenticated' });
//     }

//     const schedules = await TrainerService.getAssignedSchedules(req.user.id);
//     res.status(200).json({
//       success: true,
//       message: 'Assigned schedules retrieved successfully',
//       schedules,
//     });
//   } catch (error: any) {
//     res
//       .status(400)
//       .json({ success: false, message: error.message || 'An error occurred' });
//   }
// };
