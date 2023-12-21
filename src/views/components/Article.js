import { html } from "code-tag";
import c from "../../utils/css.js";

export default function Article() {
  return html`<article class=${c("root", import.meta.url)}>Hi Mom!</article>`;
}
