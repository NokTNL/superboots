import { html } from "code-tag";
import c from "../../utils/css.js";

export default function Article() {
  return html`
    <article class=${c("root", import.meta.url)}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa
        eligendi at cumque dolore natus quasi aliquid quaerat reprehenderit,
        corporis maxime expedita. Voluptatem eos perspiciatis, a quaerat
        molestiae assumenda accusantium.
      </p>
    </article>
  `;
}
