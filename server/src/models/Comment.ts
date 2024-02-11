import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  taskId: { type: Schema.Types.ObjectId, ref: "Task", required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Comment", commentSchema);
