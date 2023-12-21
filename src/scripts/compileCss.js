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
  ).filter((fileName) => fileName.endsWith(".local.css"));

  const fileFullPaths = filePaths.map(
    (filePath) => process.cwd() + "/src/" + filePath
  );

  const fileContents = await Promise.all(
    fileFullPaths.map(async (path) => (await fs.readFile(path)).toString())
  );

  const fileContentsWithHashedClasses = fileContents.map((content, index) =>
    content.replace(/(?<=\.)([a-zA-Z0-9_-]+)/g, (className) =>
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
