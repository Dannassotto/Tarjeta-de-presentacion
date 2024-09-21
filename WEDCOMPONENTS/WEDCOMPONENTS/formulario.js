class FormularioElement extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <h1>Tarjeta de Presentación</h1>
        `;
    }
}

customElements.define("formulario-element", FormularioElement);