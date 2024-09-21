import "./formulario.js";

class DannaElement extends HTMLElement {
    constructor() {
        super();
        this.style = `
            text-align: center; 
            border: none; /* Cambiar a 'none' para eliminar el borde */
            padding: 0; /* Asegúrate de que no haya padding */
        `;
        this.innerHTML = `
            <formulario-element></formulario-element>
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td colspan="2" style="border: 1px solid black; color: white; padding: 10px;">
                        <b style="color:black;">DANNA VALENTINA GUERRERO SOTO</b>
                    </td>
                </tr>
                <tr>
                    <td style="border: 1px solid black; width: 50%; background-color: rgb(142, 142, 238); padding: 10px;">
                        <b style="color:black;">Información de Hobbies</b>
                        <hr>
                        <p style="color:black;">Me gusta leer</p>
                        <p style="color:black;">Me gusta cocinar</p>
                        <p style="color:black;">Ver películas sobre pandemias</p>
                    </td>
                    <td style="border: 1px solid black; width: 50%; background-color: rgb(142, 142, 238); padding: 10px;">
                        <b style="color:black;">Información profesional</b>
                        <hr>
                        <p style="color:black;">Soy bachiller</p>
                        <p style="color:black;">Soy auxiliar contable y financiero</p>
                        <p style="color:black;">Estudio ingeniería en sistemas</p>
                    </td>
                </tr>
            </table>
        `;
    }

    connectedCallback() {
        console.log("se ha creado");
    }

    disconnectedCallback() {
        console.log("se ha eliminado la etiqueta");
    }
}

customElements.define("danna-element", DannaElement);
