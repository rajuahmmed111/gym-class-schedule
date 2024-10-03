// import bcrypt from 'bcrypt';
import mongoose, { Document, Schema } from 'mongoose';
// import config from '../config';
// import { USER_ROLE } from '../modules/auth/auth.constant';

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

// export type TUserRole = keyof typeof USER_ROLE;

// // / pre middleware save / hook : we will work on create()  save()
// userSchema.pre('save', async function (next) {
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this; // refers doc
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds),
//   );
//   next();
// });

// // set '' after saving password
// userSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });

// userSchema.statics.isUserExistsCustomId = async function (id: string) {
//   return await User.findOne({ id }).select('+password');
// };

// userSchema.statics.isJwtIssuedBeforePasswordChange = async function (
//   passwordChangeTimestamp: Date,
//   jwtIssuedTimeStamp: number,
// ) {
//   const passwordChangeTime = new Date(passwordChangeTimestamp).getTime() / 1000;
//   return passwordChangeTime > jwtIssuedTimeStamp;
// };

export const User = mongoose.model<IUser>('User', userSchema);
