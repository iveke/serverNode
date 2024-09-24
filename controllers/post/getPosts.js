import getAllPost from "../../helpers/getAllPost.js";
import HttpError from "../../helpers/HttpError.js";
import { Post } from "../../model/Post.js";

const getPosts = async (_, res) => {
  const postList = await Post.find();
  if(!postList){
    throw HttpError(404, "Not found")
  }
  return res.json(postList);
};
export default getPosts;
