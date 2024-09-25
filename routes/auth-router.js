import express from "express";
import authController from "../controllers/auth.controller.js";

export const app = express();

const authRouter = express.Router();

// const postPath = path.resolve("post", "post.json");

authRouter.post("/signin", authController.signin);

authRouter.post("/signup", authController.signup);
authRouter.get("/logout", () => {});

export default authRouter;
