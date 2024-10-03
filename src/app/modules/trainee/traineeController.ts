import { Request, Response } from 'express';
import { bookClass, cancelBooking, registerTrainee } from './traineeService';

// Register a new trainee
export const registerTraineeController = async (
  req: Request,
  res: Response,
) => {
  try {
    const trainee = await registerTrainee(req.body);
    res.status(201).json({
      success: true,
      message: 'Trainee registered successfully',
      trainee,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: (error as Error).message });
  }
};

// Book a class for a trainee
export const bookClassController = async (req: Request, res: Response) => {
  try {
    const { traineeId, classId } = req.body;
    const trainee = await bookClass(traineeId, classId);
    if (!trainee) {
      return res.status(404).json({
        success: false,
        message: 'Trainee not found or class already booked',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Class booked successfully',
      bookedClasses: trainee.bookedClasses,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: (error as Error).message });
  }
};

// Cancel a class booking for a trainee
export const cancelBookingController = async (req: Request, res: Response) => {
  try {
    const { traineeId, classId } = req.body;
    const trainee = await cancelBooking(traineeId, classId);
    if (!trainee) {
      return res
        .status(404)
        .json({ success: false, message: 'Trainee not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Booking canceled successfully',
      bookedClasses: trainee.bookedClasses,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: (error as Error).message });
  }
};
