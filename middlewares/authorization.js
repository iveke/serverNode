import { HttpError } from "../helpers/index.js";
import jwt from "jsonwebtoken";
import { User } from "../model/User.js";
import { ctrlWrapper } from "./../decorator/index.js";
const { JWT_SECRET } = process.env;

const authorization = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw HttpError(401, "Authorization header not found");
  }
  const [bearer, token] = authorization.split(" ");

  if (bearer != "Bearer") {
    throw HttpError(401, "Authorization header must be 'Bearer'");
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(id);

    if (!user) {
      throw HttpError(401, "User not found");
    }
    req.user = user;

    next();
  } catch (error) {
    throw HttpError(401, error.message);
  }
};

export default ctrlWrapper(authorization);
