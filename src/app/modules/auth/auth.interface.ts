/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export interface ILoginUser {
  id: string;
  password: string;
}

export interface UserModel extends Model<ILoginUser> {
  isUserExistsCustomId(id: string): Promise<ILoginUser | null>;
  isJwtIssuedBeforePasswordChange(
    passwordChangeTimestamp: Date,
    jwtIssuedTimeStamp: number,
  ): boolean;
}