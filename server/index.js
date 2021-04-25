import express from "express";
import expressGraphQL from "express-graphql";
import schema from "../graphql/";

import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { databasePath } from "./config";

const app = express();
const PORT = process.env.PORT || "4000";
const db = databasePath;

// Connect to MongoDB with Mongoose.
mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
