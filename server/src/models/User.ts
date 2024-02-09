import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    min: 2,
    max: 12,
  },
  lastName: {
    type: String,
    require: true,
    min: 2,
    max: 12,
  },
  username: {
    type: String,
    unique: true,
    require: true,
    min: 2,
  },
  password: {
    type: String,
    require: true,
    min: 5,
  },
});

const User = mongoose.model("Users", UserSchema);
export default User;
