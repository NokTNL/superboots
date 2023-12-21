import { html } from "code-tag";
import Header from "./components/Header.js";

/**
 * @param {string} children
 */
export default function AppLayout(children) {
  return html`
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Superboots</title>
        <!-- CSS Reset -->
        <link
          href=" https://cdn.jsdelivr.net/npm/modern-normalize@2.0.0/modern-normalize.min.css "
          rel="stylesheet"
        />
        <link href="styles.css" rel="stylesheet" />
      </head>
      <body>
        ${Header()} ${children}
      </body>
    </html>
  `;
}
