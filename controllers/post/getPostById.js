import getAllPost from "../../helpers/getAllPost.js";
import HttpError from "../../helpers/HttpError.js";
import { Post } from "../../model/Post.js";
import getPosts from "./getPosts.js";

const getPostById = async (req, res) => {
  const postId = req.params.postId;
  console.log(req.params);
  console.log(postId);
  const post = await Post.findById(postId);
  if (!post) {
    throw HttpError(404, "Not found by this ID");
  }
  return res.json(post);
};

export default getPostById;
