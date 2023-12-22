import express, { Router } from "express";
import { AddTodo } from "../controllers/CreateTodo";

const app: Router = express();

app.post("/AddTodo", AddTodo);

export default app;
