import fs from "fs/promises";
import path from "path";


const postPath = path.resolve("post", "post.json");

const getAllPost = async () => {
    const res = await fs.readFile(postPath);
    return JSON.parse(res);
  };

  export default getAllPost;
