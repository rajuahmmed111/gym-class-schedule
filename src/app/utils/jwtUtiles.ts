// import jwt from 'jsonwebtoken';
// import { User } from '../models/userModel';

// export const generateToken = (user: any) => {
//   return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
//     expiresIn: '1h',
//   });
// };

// export const verifyToken = (token: string) => {
//   return jwt.verify(token, process.env.JWT_SECRET);
// };




// Middleware for authentication
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import config from '../config';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, config.jwt_access_token as string);
    req.user = decoded;  
    next();
  } catch (error) {
    return res.status(403).json({ success: false, message: 'Invalid token' });
  }
};
