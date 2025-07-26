import { Router } from "express";
import { validateBody } from "../utils/validateBody.js";
import { registerSchema } from "../validation/user.js";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { registerController } from "../controllers/users.js";

const authRouter = Router();

authRouter.post(
  "/register",
  validateBody(registerSchema),
  ctrlWrapper(registerController)
);

export default authRouter;
