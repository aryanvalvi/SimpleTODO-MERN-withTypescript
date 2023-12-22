import express, { Application, json } from "express";
import route1 from "./routes/route1";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app: Application = express();
dotenv.config();

app.use(json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("database is connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/", route1);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
