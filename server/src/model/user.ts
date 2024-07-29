import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username required"],
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email required"],
    },
    password: {
      type: String,
      required: [true, "Password required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
