import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

// export const authMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');
//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: 'Unauthorized access. Token required.',
//     });
//   }

//   try {
//     const decoded = jwt.verify(token, config.jwt_access_token);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ success: false, message: 'Invalid token.' });
//   }
// };



export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Extract token from cookies
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized access. Token required.',
    });
  }

  try {
    const decoded = jwt.verify(token, config.jwt_access_token);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token.' });
  }
};


export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user.role !== 'Admin') {
    return res
      .status(403)
      .json({ success: false, message: 'Unauthorized access. Admins only.' });
  }
  next();
};
