import HttpError from "../../helpers/HttpError.js";
import { Post } from "../../model/Post.js";

const getPosts = async (req, res) => {
  const { _id } = req.user;
  const { page, limit } = req.query;

  const totalPosts = Post.countDocuments(_id);

  const postList = await Post.find({ _id }, "", {
    skip: (page - 1) * limit,
    limit,
  });
  if (!postList) {
    throw HttpError(404, "Not found");
  }
  return res.json({ postList: postList, total: totalPosts });
};
export default getPosts;
