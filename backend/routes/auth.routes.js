import { Router } from "express";
import { checkAuth, signin, signout, signup } from "../controller/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.middleware.js";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.post("/signout", signout);
authRouter.get("/check-auth", verifyToken, checkAuth);

export default authRouter;
