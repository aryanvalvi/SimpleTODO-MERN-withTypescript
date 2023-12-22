import { Request, Response } from "express";
import { Task } from "../Models/UserModel";
const AddTodo = (req: Request, res: Response) => {
  const { text } = req.body;
  res.status(200).send("Thank You");
  console.log(text);
  const newtask = new Task({
    Task: text,
  });
  newtask.save().then(() => {
    console.log("data is inserted");
  });
};

export { AddTodo };

//database attach karna
