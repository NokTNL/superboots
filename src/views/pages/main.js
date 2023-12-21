import { html } from "code-tag";
import AppLayout from "../_app.js";

export default function IndexPage() {
  return AppLayout(
    html`
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        recusandae consectetur provident facere cumque placeat incidunt
        praesentium sapiente error, nam commodi explicabo molestias esse iure
        accusamus fuga porro doloremque nisi.
      </p>
      <h1>Superboots</h1>
      <h2>Superboots</h2>
      <h3>Superboots</h3>
      <h4>Superboots</h4>
      <h5>Superboots</h5>
      <h6>Superboots</h6>
    `
  );
}
