/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trainer } from '../../models/trainerModel';
import { ClassSchedule } from '../../models/classScheduleModel';

export const TrainerService = {
  createTrainer: async (trainerData: any) => {
    const trainer = new Trainer(trainerData);
    await trainer.save();
    return trainer;
  },

  updateTrainer: async (trainerId: string, trainerData: any) => {
    const trainer = await Trainer.findByIdAndUpdate(trainerId, trainerData, {
      new: true,
    });
    if (!trainer) {
      throw new Error('Trainer not found');
    }
    return trainer;
  },

  deleteTrainer: async (trainerId: string) => {
    const trainer = await Trainer.findByIdAndDelete(trainerId);
    if (!trainer) {
      throw new Error('Trainer not found');
    }
    return trainer;
  },

  getAssignedSchedules: async (trainerId: string) => {
    const schedules = await ClassSchedule.find({ trainerId });
    if (!schedules) {
      throw new Error('No schedules found for this trainer');
    }
    return schedules;
  },
};
