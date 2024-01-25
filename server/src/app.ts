import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
