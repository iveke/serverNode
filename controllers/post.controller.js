import { ctrlWrapper } from "../decorator/index.js";
import { createPost } from "./post/index.js";
import { deletePost } from "./post/index.js";
import { getPostById } from "./post/index.js";
import { getPosts } from "./post/index.js";
import { updatePost } from "./post/index.js";

export default {
  getPosts: ctrlWrapper(getPosts),
  getPostById: ctrlWrapper(getPostById),
  createPost: ctrlWrapper(createPost),
  updatePost: ctrlWrapper(updatePost),
  deletePost: ctrlWrapper(deletePost),
};
