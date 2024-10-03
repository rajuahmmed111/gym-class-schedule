import mongoose, { Schema, Document } from 'mongoose';

interface IClassSchedule extends Document {
  date: Date;
  time: string;
  trainerId: string;
  trainees: string[];
}

const classScheduleSchema: Schema = new Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  trainerId: { type: String, required: true },
  trainees: [{ type: String }],
});

export const ClassSchedule = mongoose.model<IClassSchedule>(
  'ClassSchedule',
  classScheduleSchema,
);
