import { ctrlWrapper } from "../decorator/index.js";
import * as auth from "./auth/index.js";

export default {
  signup: ctrlWrapper(auth.signup),
  signin: ctrlWrapper(auth.signin),
  getInfo: ctrlWrapper(auth.getInfo),
  logout: ctrlWrapper(auth.logout),
};
