import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { errorHandler } from './app/middleware/errorHandler';
import { authRoutes } from './app/modules/auth/authRoutes';
import { traineeRoutes } from './app/modules/trainee/trainee.Routes';
import { trainerRoutes } from './app/modules/trainer/trainerRoutes';
import { adminRoutes } from './app/modules/admin/adminRoutes';
const app: Application = express();


app.use(express.json());
app.use(cors());



// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/trainer', trainerRoutes);
app.use('/api/trainee', traineeRoutes);
app.use('/api/auth', authRoutes);

// Error Handler Middleware
app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
