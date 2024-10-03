/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trainer } from '../../models/trainerModel';
import { ClassSchedule } from '../../models/classScheduleModel';

export const AdminService = {
  createTrainer: async (trainerData: any) => {
    const trainer = new Trainer(trainerData);
    await trainer.save();
    return trainer;
  },

  createClassSchedule: async (scheduleData: any) => {
    const schedule = new ClassSchedule(scheduleData);
    await schedule.save();
    return schedule;
  },
};
 