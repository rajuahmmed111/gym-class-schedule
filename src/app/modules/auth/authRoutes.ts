import { Router } from 'express';
import { login, register } from './authController';

const router = Router();

router.post('/login', login);
router.post('/register', register);

export const authRoutes = router;




// import { Router } from 'express';
// import validateRequest from '../../middleware/validateRequest';
// import { loginValidation } from './authValidation';
// import { authControllers } from './authController';
// import auth from '../../middleware/authMiddleware';
// import { USER_ROLE } from './auth.constant';


// const router = Router();

// router.post(
//   '/login',
//   validateRequest(loginValidation.createLoginValidationSchema),
//   authControllers.loginUser,
// );

// router.post(
//   '/change-password',
//   auth(USER_ROLE.Admin, USER_ROLE.Admin, USER_ROLE.Trainee),
//   validateRequest(loginValidation.changeValidationSchema),
//   authControllers.changePassword,
// );

// router.post(
//   '/refresh-token',
//   validateRequest(loginValidation.refreshTokenValidationSchema),
//   authControllers.refreshToken,
// );

// export const authRoutes = router;
