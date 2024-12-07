import express from "express";
import path from "path";
import logger from "morgan";
import authRouter from "./routes/authRouter";

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use("/api/auth", authRouter);

export default app;
