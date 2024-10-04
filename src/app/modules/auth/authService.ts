import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../../models/userModel';
import config from '../../config';

export const AuthService = {
  login: async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid email or password');
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      config.jwt_access_token,
      { expiresIn: '1h' },
    );
    return token;
  },

  register: async (
    name: string,
    email: string,
    password: string,
    role: string,
  ) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    return user;
  },
};









