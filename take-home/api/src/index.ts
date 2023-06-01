import * as express from "express";
import * as cors from "cors";
import { getCountryById } from "./countries.controller";

const port = 3000;
const app: express.Application = express();

app.use(cors());

app.get("/countries/:id", getCountryById);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
