import chalk from "chalk";
import fs from "fs/promises";
import c from "../utils/css.js";
import url from "url";
import * as sass from "sass";

export default async function compileLocalCss() {
  console.info(chalk.blue("Compiling CSS..."));

  const filePaths = (
    await fs.readdir(process.cwd() + "/src", {
      recursive: true,
    })
  ).filter((fileName) => fileName.endsWith(".local.scss"));

  const fileFullPaths = filePaths.map(
    (filePath) => process.cwd() + "/src/" + filePath
  );

  const plainCSSFileContents = fileFullPaths.map(
    (path) => sass.compile(path).css
  );

  const fileContentsWithHashedClasses = plainCSSFileContents.map(
    (content, index) =>
      content.replace(/(?<=\.)([\w-]+(?=[\s\w-:]*{))/g, (className) =>
        c(className, url.pathToFileURL(fileFullPaths[index]).toString())
      )
  );

  const allCss = fileContentsWithHashedClasses.join("\n");

  await fs.writeFile(process.cwd() + "/src/public/styles_local.css", allCss);

  console.info(chalk.blue("CSS compilation complete!"));
}

export async function compileSass() {
  const { css } = sass.compile("src/themes/_index.scss");
  await fs.writeFile(process.cwd() + "/src/public/styles_global.css", css);
}
