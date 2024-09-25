import { HttpError } from "../../helpers/index.js";
import bcrypt from "bcryptjs";
import { User } from "../../model/User.js";

const signup = async (req, res) => {
  const { email, password, username } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email already exists");
  }
  const pass = await bcrypt.hash(password, 10);
  // const isHash = await bcrypt.

  const newUser = await User.create({ username, email, password: pass });
  res.status(201).json({ newUser });
};

export default signup;
