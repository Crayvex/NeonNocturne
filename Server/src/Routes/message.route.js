import { Router } from "express";
import { USER_CHECK } from "../Middleware/auth.check.js";
import { SEND_MESSAGE } from "../Controllers/message.controller.js";

const MESSAGE_ROUTER = Router()

MESSAGE_ROUTER.post('send-message', USER_CHECK, SEND_MESSAGE)

export default MESSAGE_ROUTER;