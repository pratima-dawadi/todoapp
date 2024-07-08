import express from "express";
import config from "./config";
import todoRouter from "./routes/todo";

const app = express();

app.use(express.json());
app.use(todoRouter);

app.listen(config, () => {
  console.log(`Server is running on port ${config.port}`);
});
