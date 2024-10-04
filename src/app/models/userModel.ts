// import bcrypt from 'bcrypt';
import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ['Admin', 'Trainer', 'Trainee'],
    },
  },
  {
    timestamps: true,
  },
);



export const User = mongoose.model<IUser>('User', userSchema);
