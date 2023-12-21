import { html } from "code-tag";
import c from "../../utils/css.js";

export default function Header() {
  return html`
    <header class=${c("root", import.meta.url)}>
      <h1>Superboots</h1>
      <nav>
        <ul class=${c("ul", import.meta.url)}>
          <li class=${c("li", import.meta.url)}><a href="/">Home</a></li>
          <li class=${c("li", import.meta.url)}><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  `;
}
