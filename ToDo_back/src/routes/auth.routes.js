import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controllers";

const routerAuth = Router();
const baseUrl = "/api/auth"

router.post(`${baseUrl}/register`, registerUser)

router.post(`${baseUrl}/login`, loginUser)

export default routerAuth