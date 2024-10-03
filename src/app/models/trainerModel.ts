import mongoose, {  Schema } from 'mongoose';

interface ITrainer {
  _id?: string; 
  name: string;
  email: string;
  experience: number;
  specialization: string;
  expertise: string;
}

const trainerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  experience: { type: Number, required: true },
  specialization: { type: String, required: true },
  expertise: { type: String, required: true },
});

export const Trainer = mongoose.model<ITrainer>('Trainer', trainerSchema);
