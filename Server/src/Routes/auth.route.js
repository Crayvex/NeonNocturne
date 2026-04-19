import express from 'express';
import { SIGNUP, LOGIN, LOGOUT, GET_USER, CHECK_AUTH } from '../Controllers/auth.controller.js';
import { USER_CHECK } from '../Middleware/auth.check.js';

const AUTH_ROUTER = express.Router();

AUTH_ROUTER.post('/signup', SIGNUP);
AUTH_ROUTER.post('/login', LOGIN);
AUTH_ROUTER.post('/logout', LOGOUT);

AUTH_ROUTER.get('/check-auth', USER_CHECK, CHECK_AUTH)
AUTH_ROUTER.get('/get-user', USER_CHECK, GET_USER)

export default AUTH_ROUTER;