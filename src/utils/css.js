import { createHash } from "crypto";
/**
 * @param {string} className
 * @param {string} path
 * @returns {string} hashed class name
 */
export default function c(className, path) {
  const [, fileName, suffix] = path.match(/\/(\w+)\.(.+)$/) ?? [];

  /**
   * Create hash
   */
  const hash = createHash("sha256");
  hash.update(path.replace(suffix, ""));
  const hashed = hash.digest("base64").slice(0, 6);

  return `${fileName}-${className}-${hashed}`;
}
