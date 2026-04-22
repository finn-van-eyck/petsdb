import express, { Application, Request, Response } from "express";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();
import expressLayouts from "express-ejs-layouts";
import routes from "./routes";

const app: Application = express();
const PORT: number = 2000;

// EJS als template-engine instellen
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware voor layouts
app.use(expressLayouts);
app.set("layout", "layouts/main");

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});