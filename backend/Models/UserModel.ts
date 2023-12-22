import mongoose from "mongoose";
const Schema = mongoose.Schema;

const USERSCHEMA = new Schema({
  Task: String,
});

const Task = mongoose.model("user", USERSCHEMA);

export { Task };
