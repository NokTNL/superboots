import { html } from "code-tag";
import c from "../../../utils/css.js";
import classNames from "classnames";

/**
 * @typedef {Object} ButtonProps
 * @property {string=} children
 * @property {string=} variant
 */

/**
 * @param {ButtonProps} params0
 */
export default function Button({ children = "", variant = "primary" }) {
  return html`<button
    class="${classNames(
      c("button", import.meta.url),
      c(`button-${variant}`, import.meta.url)
    )}"
  >
    ${children}
  </button>`;
}
