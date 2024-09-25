import { User } from "../../model/User.js";

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, {
    token: "",
  });
  res.json({ message: "Logout is success" });
};
export default logout;
