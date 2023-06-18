import express from "express";
import { register } from "../controllers/Usercontrollers.js";
import { checksForRegister } from "../middleware/authMiddleware.js";


var router = express.Router();

router.post('/register',checksForRegister, register)


export default router;