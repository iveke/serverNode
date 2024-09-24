import express from "express";
import cors from "cors";
import postRouter from "./routes/post-router.js";
import authRouter from "./routes/auth-router.js";

export const app = express();
const middleCors = cors();

app.use(middleCors);
app.use(express.json());

app.use((req, res, next) => {
  console.log("you in middlewar");
  next();
});
// app.use("/", postRouter)
// app.use("/:postId", postRouter)
app.use("/po*st/", postRouter);
app.use("/post/:postId", postRouter);

app.use("/auth", authRouter);

app.use((err, req, res, next) => {
  console.log("err:", err);
  res.status(err.status).json({ message: err.message });
});
export default app;
