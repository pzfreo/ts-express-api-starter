import express from "express";
import { RegisterRoutes } from "./generated/routes";

export const app = express();

// read json payloads
app.use(express.json());

RegisterRoutes(app);

const port = process.env.PORT || 8000;

app.listen(port, () =>
  console.log(`Phone app listening at http://localhost:${port}`)
);
