import express, { Application, Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();
import routes from "./routes";

const app: Application = express();
const PORT: number = 2000;

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});