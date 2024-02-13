import mongoose from "mongoose";
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Notification", notificationSchema);
