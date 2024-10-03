import mongoose, { Schema, Document } from 'mongoose';

interface ITrainee extends Document {
  name: string;
  email: string;
  password: string;
  bookedClasses: string[];
}

const traineeSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bookedClasses: [{ type: Schema.Types.ObjectId, ref: 'ClassSchedule' }],
});

export const Trainee = mongoose.model<ITrainee>('Trainee', traineeSchema);
