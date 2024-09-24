import { isValidObjectId } from "mongoose";
import HttpError from "../helpers/HttpError.js";

const isValidId = (req, res, next) => {
  const { postId } = req.params;

  if (!isValidObjectId(postId)) {
    return next(HttpError(404, `${postId} - is not valid id`));
  }
  next();
};

export default isValidId;