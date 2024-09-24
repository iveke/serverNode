import HttpError from "../../helpers/HttpError";
import { User } from "../../model/User";

const signup = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email already exists");
  }
  const newUser = await User.create({ ...req.body });
  res.status(201).json({ newUser });
};

export default signup;
