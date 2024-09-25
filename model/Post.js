import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";

const postSchema = new Schema(
  {
    title: {
      type: String,
      minLength: 1,
      required: true,
    },
    description: {
      type: String,
      minLength: 1,
      required: true,
    },
    level: {
      type: String,
      enum: ["easy", "middle", "hard"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
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
