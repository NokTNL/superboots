import { html } from "code-tag";
import c from "../../../utils/css.js";
import classNames from "classnames";

/**
 * @typedef {Object} ButtonProps
 * @property {string=} children
 * @property {string=} variant
 * @property {string=} attributes
 */

/**
 * @param {ButtonProps} params0
 */
export default function Button({
  children = "",
  variant = "primary",
  attributes = "",
}) {
  return html`
    <button class="${classNames("button", `button-${variant}`)}" ${attributes}>
      ${children}
    </button>
  `;
}
