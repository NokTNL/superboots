import { html } from "code-tag";
import AppLayout from "../_app.js";
import Article from "../components/Article.js";

export default function IndexPage() {
  return AppLayout(
    html`
      ${Article()}
      <h1>Superboots</h1>
      <h2>Superboots</h2>
      <h3>Superboots</h3>
      <h4>Superboots</h4>
      <h5>Superboots</h5>
      <h6>Superboots</h6>
    `
  );
}
