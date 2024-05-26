import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDateFrom: { type: Date },
  dueDateTo: { type: Date },
  priority: { type: String, enum: ["Low", "Medium", "High"], default: "Low" },
  status: {
    type: String,
    enum: ["To-Do", "In Progress", "Done"],
    default: "To-Do",
  },
  assignee: { type: Schema.Types.ObjectId, ref: "User" },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  // Other task-related fields as needed
});

export default mongoose.model("Task", taskSchema);
