import { Post } from "../../model/Post.js";

const createPost = async (req, res) => {
  const { _id } = req.user;
  const newPost = await Post.create({ ...req.body, owner: _id });
  res.status(201).json(newPost);
};

export default createPost;
