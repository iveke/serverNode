import ctrlWrapper from "../decorator/ctrlWrapper.js";
import createPost from "./post/createPost.js";
import deletePost from "./post/deletePost.js";
import getPostById from "./post/getPostById.js";
import getPosts from "./post/getPosts.js";
import updatePost from "./post/updatePost.js";

export default {
    getPosts: ctrlWrapper(getPosts),
    getPostById: ctrlWrapper(getPostById),
    createPost: ctrlWrapper(createPost),
    updatePost: ctrlWrapper(updatePost),
    deletePost: ctrlWrapper(deletePost)
}