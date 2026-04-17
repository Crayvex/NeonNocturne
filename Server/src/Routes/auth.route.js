import express from 'express';
import { SIGNUP, LOGIN, LOGOUT } from '../Controllers/auth.controller.js';

const AUTH_ROUTER = express.Router();

AUTH_ROUTER.post('/signup', SIGNUP);
AUTH_ROUTER.post('/login', LOGIN);
AUTH_ROUTER.post('/logout', LOGOUT);

export default AUTH_ROUTER;