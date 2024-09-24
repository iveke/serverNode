import express from "express";
import { User } from "../model/User.js";
import authController from "../controllers/auth.controller";

export const app = express();

const authRouter = express.Router();

// const postPath = path.resolve("post", "post.json");

authRouter.post("/signin", () => {});

authRouter.post("/signup", authController.signup);
authRouter.get("/logout", () => {});

export default authRouter;
