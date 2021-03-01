import "reflect-metadata";
import "./database";
import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());

const port = 3333;
app.listen(port, () => console.log(`Server running at port ${port}`));

app.use(router);
