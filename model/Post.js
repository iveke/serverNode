import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      enum: ["easy", "middle", "hard"],
    },
    relevant: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

postSchema.post("save", handleSaveError);

postSchema.pre("findOneAndUpdate", preUpdate);

postSchema.post("findOneAndUpdate", handleSaveError);

export const Post = model("post", postSchema);
