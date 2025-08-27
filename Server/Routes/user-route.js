import express from "express"
const router = express.Router();
import protectRoute from "../Middleware/protectRoute.js";
import  {getUsersForSidebar} from "../controller/user-controller.js";

router.get("/", protectRoute, getUsersForSidebar);


export default router;