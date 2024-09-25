import express from "express";
// import { getAllPost } from "../controller/get-allPost.js";
import postController from "../controllers/post.controller.js";
import validateBody from "../decorator/validateBody.js";
import { addPostSchema, editPostSchema } from "../shema/post-schema.js";
import { isValidId, isEmptyBody, authorization } from "../middlewares/index.js";

export const app = express();

const postRouter = express.Router();

// const postPath = path.resolve("post", "post.json");
postRouter.use(authorization);
postRouter.get("/", postController.getPosts);

postRouter.get("/:postId", isValidId, postController.getPostById);
postRouter.post(
  "/",
  isEmptyBody,
  validateBody(addPostSchema),
  postController.createPost
);

postRouter.put(
  "/:postId",
  isEmptyBody,
  validateBody(editPostSchema),
  postController.updatePost
);

postRouter.delete("/:postId", postController.deletePost);

export default postRouter;
