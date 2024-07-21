import mongoose, { Document, Schema } from "mongoose";
interface iUser extends Document {
    username: string;
    email: string;
    password?: string;
    provider: "email" | "google";
    googleId?: string;
    isVerified: boolean;
}
const UserSchema: Schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    provider: { type: String, enum: ['email', 'google'], required: true },
    googleId: { type: String },
    isVerified: { type: Boolean, default: false },
  });
  