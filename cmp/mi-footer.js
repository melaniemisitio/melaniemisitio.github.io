class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Sanchez Caballero Melanie Yamile IC-51M.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);