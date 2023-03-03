import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createUser, signin } from "./handlers/user";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.use("/api", protect, router);

app.post("/user", createUser);
app.post("/signin", signin);

app.use((err, req, res, next) => {
  console.log(err);
  res.json({ message: `Something went wrong ${err.message}` });
});

export default app;
