import { Router } from "express";
import { verifyToken } from "../controllers/auth.middleware";

const routerTasks = Router();
const baseUrl = "/api/tasks"

router.use(verifyToken)

router.get(baseUrl,)


export default routerTasks