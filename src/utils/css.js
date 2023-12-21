import { createHash } from "crypto";
/**
 * @param {string} className
 * @param {string} path
 */
export default function parseClass(className, path) {
  const [, fileName, suffix] = path.match(/\/(\w+)\.(\w+)$/) ?? [];

  /**
   * Create hash
   */
  const hash = createHash("sha256");
  hash.update(path.replace(suffix, ""));
  const hashed = hash.digest("base64").slice(0, 6);

  return `${fileName}-${className}-${hashed}`;
}
