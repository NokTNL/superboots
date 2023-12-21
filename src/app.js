import bodyParser from "body-parser";
import express from "express";
import { fileURLToPath } from "url";
import indexRoute from "./routes/index.js";
import compileLocalCss, { compileSass } from "./scripts/compileCss.js";

/**
 * Compile CSS
 */
compileLocalCss();
compileSass();

const app = express();
/**
 * Request body parser
 */
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * Static file serving
 */
app.use(express.static(fileURLToPath(new URL("public", import.meta.url))));

app.use(indexRoute);

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(fileURLToPath(new URL("views/404.html", import.meta.url)));
});

app.listen(3000);
