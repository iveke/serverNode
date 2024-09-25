import { HttpError } from "../../helpers/index.js";
import { User } from "../../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

const signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(409, "Email or password invalid");
  }

  const comparePassword = await bcrypt.compare(password, user.password);
  console.log(comparePassword);
  if (!comparePassword) {
    throw HttpError(409, "Email or password invalid");
  }

  const payload = { id: user._id };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });
  console.log(token);
  // console.log(await User.findByIdAndUpdate(user._id, { token }));
  await User.findByIdAndUpdate(user._id, { token });
  return res.json({
    token,
    user: {
      email: email,
      id: user._id,
      username: user.username,
    },
  });
  //   console.log(token);
  //   console.log(jwt.verify(token, JWT_SECRET));
};

export default signin;
