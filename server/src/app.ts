import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import api from "./routes/api";
import data from "./data/data";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use("/api", api);

const PORT = process.env.PORT;
const dbName = process.env.DBNAME;

mongoose
  .connect(process.env.MONGO_URL, { dbName })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    //Insert users to db
    // data();
  })
  .catch((error) => console.log(`${error} did not connect`));
