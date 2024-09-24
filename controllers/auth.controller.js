import ctrlWrapper from "../decorator/ctrlWrapper";
import * as auth from "./auth/index.js";

export default {
  signup: ctrlWrapper(auth.signup),
};
