import HttpError from "../../helpers/HttpError.js";
import { Post } from "../../model/Post.js";

const getPostById = async (req, res) => {
  const { _id } = req.user;
  const postId = req.params.postId;
  const post = await Post.findOne({ _id: postId, owner: _id });
  if (!post) {
    throw HttpError(404, "Not found by this ID");
  }
  return res.json(post);
};

export default getPostById;
