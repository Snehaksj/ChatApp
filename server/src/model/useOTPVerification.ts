import mongoose, { Schema, Document } from "mongoose";

interface iOTP extends Document {
  username: string;
  otp: string;
  createdAt: Date;
  expiredAt: Date;
}

const UserOTPVerificationSchema: Schema<iOTP> = new Schema({
  username: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  expiredAt: {
    type: Date,
    required: true,
  },
});

export default mongoose.model<iOTP>("OTP", UserOTPVerificationSchema);
