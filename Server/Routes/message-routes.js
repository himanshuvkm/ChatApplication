import express from "express"
import protectRoute from "../Middleware/protectRoute.js"
const router = express.Router();
import { getMessage, sendMessage } from "../controller/message-controller.js";


router.get("/:id",protectRoute,getMessage);
router.post("/send/:id",protectRoute,sendMessage);

export default router;  