import { html } from "code-tag";
import AppLayout from "../_app.js";
import Article from "../components/Article.js";
import Button from "../components/common/Button.js";

export default function IndexPage() {
  return AppLayout(
    html`
      ${Article()} ${Article()}
      <div>
        ${Button({ children: "Click me!", variant: "primary" })}
        ${Button({ children: "Click me!", variant: "secondary" })}
        ${Button({ children: "Click me!", variant: "warning" })}
      </div>
      <h1 class="h1">Superboots</h1>
      <h2 class="h2">Superboots</h2>
      <h3 class="h3">Superboots</h3>
      <h4 class="h4">Superboots</h4>
      <h5 class="h5">Superboots</h5>
      <h6 class="h6">Superboots</h6>
    `
  );
}
