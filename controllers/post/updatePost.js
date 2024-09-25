import HttpError from "../../helpers/HttpError.js";
import { Post } from "../../model/Post.js";

const updatePost = async (req, res) => {
  const { _id } = req.user;
  const postId = req.params.postId;
  const post = await Post.findOneAndUpdate(
    { _id: postId, owner: _id },
    { ...req.body }
  );
  if (!post) {
    throw HttpError(404, "Not found by this ID");
  }
  res.status(201).json(post);
};

export default updatePost;
