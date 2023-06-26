import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import XULElement from "./XULElement";

@customElement("window")
export class Window extends XULElement {
  render() {
    open().document.body.innerHTML = this.innerHTML;
  }
}
