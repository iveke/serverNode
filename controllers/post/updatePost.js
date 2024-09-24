import getAllPost from "../../helpers/getAllPost.js";
import HttpError from "../../helpers/HttpError.js";
import updateJSON from "../../helpers/updateJSON.js";
import { Post } from "../../model/Post.js";

const updatePost = async (req, res) => {
  const postId = req.params.postId;
  const post = await Post.findByIdAndUpdate(postId, { ...req.body });
  if (!post) {
    throw HttpError(404, "Not found by this ID");
  }
  res.json(post);
};

export default updatePost;
