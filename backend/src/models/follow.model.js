import mongoose, { Schema } from "mongoose";

const FollowSchema = new Schema(
  {
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export const Follow = mongoose.model("Follow", FollowSchema);
