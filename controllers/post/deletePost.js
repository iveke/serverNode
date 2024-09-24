import getAllPost from "../../helpers/getAllPost.js";
import updateJSON from "../../helpers/updateJSON.js";
import { Post } from "../../model/Post.js";

const deletePost = async (req, res) => {
  // const postList = await getAllPost();
  const postId = req.params.postId;
  const post = await Post.findByIdAndDelete(postId)
  // const idx = postList.findIndex((post) => post.id == req.params.postId);
  if (!post) {
    res.json(`Not found this post with id:${postId}`);
  }
  // const [result] = postList.splice(idx, 1);
  // await updateJSON(postList);
  return res.json(`this post by id:${post.id} been deleted success`);
};

export default deletePost;
