import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { getHighScore, postHighScore } from "./utils/db.js";
const app = express();
const PORT = process.env.PORT || 3001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors())
app.use(express.json());

app.use(express.static('client/build'))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')))
}

console.log(path.join(__dirname, 'client/build'))

app.get("/score", (req, res) => {
  getHighScore()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/score", (req, res) => {
  postHighScore(req.body.username, req.body.score)
  res.status(201).send()
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
