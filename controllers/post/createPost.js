import { nanoid } from "nanoid";
import getAllPost from "../../helpers/getAllPost.js";
import updateJSON from "../../helpers/updateJSON.js";
import { Post } from "../../model/Post.js";

const createPost = async (req, res) => {
    const newPost = await Post.create({...req.body});
    res.json(newPost);
}

export default createPost;