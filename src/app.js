import bodyParser from "body-parser";
import express from "express";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import indexRoute from "./routes/index.js";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", fileURLToPath(new URL("views", import.meta.url)));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(fileURLToPath(new URL("public", import.meta.url))));

app.use(indexRoute);

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(fileURLToPath(new URL("views/404.html", import.meta.url)));
});

app.listen(3000);
