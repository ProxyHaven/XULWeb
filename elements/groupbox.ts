import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";

// TODO: Use
import XULElement from "./XULElement";

@customElement("groupbox")
export class GroupBox extends HTMLFieldSetElement {
  render() {
    this.getElementsByTagName("caption").getAttribute("label");
    const legend = document.createElement("legend");
    legend.innerHTML = this.getElementsByTagName("caption").getAttribute("label");
    this.appendChild(legend);
  }
}
