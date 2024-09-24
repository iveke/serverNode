import fs from "fs/promises";
import path from "path";
const postPath = path.resolve("post", "post.json");


 const updateJSON = async (posts) => {
    await fs.writeFile(postPath, JSON.stringify(posts, null, 2));
  };

export default updateJSON;