import { Post } from "../../model/Post.js";

const deletePost = async (req, res) => {
  const postId = req.params.postId;
  const post = await Post.findByIdAndDelete(postId);
  if (!post) {
    res.json(`Not found this post with id:${postId}`);
  }
  return res.json(`this post by id:${post.id} been deleted success`);
};

export default deletePost;
