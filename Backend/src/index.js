import express from "express";
import jokes from "./routes/jokes.routes.js";
const app = express();
app.use(express.json())

app.use(jokes);
app.listen(3000);

console.log("running on port 3000");
