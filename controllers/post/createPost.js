import { Post } from "../../model/Post.js";

const createPost = async (req, res) => {
  const newPost = await Post.create({ ...req.body });
  res.json(newPost);
};

export default createPost;
