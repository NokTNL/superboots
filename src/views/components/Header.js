import { html } from "code-tag";
import parseClass from "../../utils/css.js";

export default function Header() {
  return html`
    <header class=${parseClass("root", import.meta.url)}>
      <div>
        <h1>Superboots</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}
