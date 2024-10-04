 
import { Request, Response } from 'express';
import { AuthService } from './authService';

// export const login = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     // console.log(email, password);
//     const token = await AuthService.login(email, password);
//     res.status(200).json({ success: true, message: 'Login successful', token });
//   } catch (err) {
//     const error = err as Error;
//     res.status(400).json({ success: false, message: error.message });
//   }
// };


export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await AuthService.login(email, password);

    // Set the token as an HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'strict',
    });

    res.status(200).json({ success: true, message: 'Login successful' });
  } catch (err) {
    const error = err as Error;
    res.status(400).json({ success: false, message: error.message });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await AuthService.register(name, email, password, role);
    res
      .status(201)
      .json({ success: true, message: 'Registration successful', user });
  } catch (err) {
    const error = err as Error; 
    res.status(400).json({ success: false, message: error.message });
  }
};



