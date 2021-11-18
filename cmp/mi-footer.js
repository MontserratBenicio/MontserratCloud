class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Montserrat Benicio Manzano.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
