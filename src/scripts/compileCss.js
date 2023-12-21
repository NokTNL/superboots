import chalk from "chalk";
import fs from "fs/promises";
import parseClass from "../utils/css.js";
import url from "url";

export default async function compileCss() {
  console.info(chalk.blue("Compiling CSS..."));

  const fileName = process.cwd() + "/src/views/components/Header.css";

  const fileContent = (await fs.readFile(fileName)).toString();
  const fileWithHashedClasses = fileContent.replace(
    /(?<=\.)([a-zA-Z0-9_-]+)/g,
    (className) => parseClass(className, url.pathToFileURL(fileName).toString())
  );

  await fs.writeFile(
    process.cwd() + "/src/public/styles.css",
    fileWithHashedClasses
  );

  console.info(chalk.blue("CSS compilation complete!"));
}
