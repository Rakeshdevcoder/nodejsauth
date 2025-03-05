import { Router } from "express";
<<<<<<< HEAD
import { checkAuth, signin, signout, signup } from "../controller/auth.controller.js";
=======
import {
  checkAuth,
  signin,
  signout,
  signup,
  logout,
} from "../controller/auth.controller.js";
>>>>>>> d98c783 (pushing final code)
import { verifyToken } from "../middleware/verifyToken.middleware.js";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.post("/signout", signout);
authRouter.get("/check-auth", verifyToken, checkAuth);
<<<<<<< HEAD
=======
authRouter.post("/logout", logout);
>>>>>>> d98c783 (pushing final code)

export default authRouter;
