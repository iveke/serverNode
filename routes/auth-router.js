import express from "express";
import authController from "../controllers/auth.controller.js";
import { authorization } from "../middlewares/index.js";

export const app = express();

const authRouter = express.Router();

// const postPath = path.resolve("post", "post.json");

authRouter.post("/signin", authController.signin);

authRouter.post("/signup", authController.signup);
authRouter.get("/current", authorization, authController.getInfo);
authRouter.post("/logout", authorization, authController.logout);

export default authRouter;
