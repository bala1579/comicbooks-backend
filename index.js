import express from "express";
import { PORT, CONN } from "./config.js";
import mongoose from "mongoose";

import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/comicbooks", bookRoutes); // this mean all request with books prefix use bookRoutes

mongoose
  .connect(CONN)
  .then(() => {
    console.log(" database connected");

    app.listen(PORT, () =>
      // this database is connected then express server is running
      {
        console.log(`app is listning on port ${PORT}`);
      }
    );
  })
  .catch((error) => {
    console.log(error);
  });
