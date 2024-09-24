import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";

const userSchema = new Schema({
  username: {
    type: String,
    minLength: 1,
    maxLength: 32,
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    minLength: 6,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    unique: true,
    required: [true, "Email is required"],
  },
});

userSchema.post("save", handleSaveError);

userSchema.pre("findOneAndUpdate", preUpdate);

userSchema.post("findOneAndUpdate", handleSaveError);

export const User = model("auth", userSchema);
