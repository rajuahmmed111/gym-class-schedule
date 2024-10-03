 
import { Request, Response } from 'express';
import { AuthService } from './authService';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    // console.log(email, password);
    const token = await AuthService.login(email, password);
    res.status(200).json({ success: true, message: 'Login successful', token });
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



// import httpStatus from 'http-status';
// import config from '../../config';
// import catchAsync from '../../utils/catchAsync';
// import sendResponse from '../../utils/sendResponse';
// import { authServices } from './authService';
// // import { authServices } from './auth.service';

// const loginUser = catchAsync(async (req, res) => {
//   const result = await authServices.loginUser(req.body);
//   const { accessToken, refreshToken, needsPasswordChange } = result;

//   res.cookie('refreshToken', refreshToken, {
//     secure: config.NODE_ENV === 'production',
//     httpOnly: true,
//   });

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User is login successfully',
//     data: {
//       accessToken,
//       needsPasswordChange,
//     },
//   });
// });

// //
// const changePassword = catchAsync(async (req, res) => {
//   const { ...passwordData } = req.body;
//   const result = await authServices.changePassword(req.user, passwordData);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Password is change successfully',
//     data: result,
//   });
// });

// //
// const refreshToken = catchAsync(async (req, res) => {
//   const { refreshToken } = req.cookies;
//   const result = await authServices.refreshToken(refreshToken);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Access Token is retrieved successfully',
//     data: result,
//   });
// });

// export const authControllers = {
//   loginUser,
//   changePassword,
//   refreshToken,
// };
