import express from 'express';
import { tryCatch } from '../middlewares/tryCatchMiddleware';
import { register, login } from '../controllers/authController';

const router = express.Router();


router.post('/register', tryCatch(register));


router.post('/login', tryCatch(login));

export default router;
