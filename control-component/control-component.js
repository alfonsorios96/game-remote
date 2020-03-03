import {html, LitElement} from 'lit-element';
import style from './control-component-styles.js';

class ControlComponent extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
  }

  render() {
    return html`
       <button @click="${this.add}">+</button>
       <button @click="${this.less}">-</button>
      `;
  }

  add() {
    firebase.database().ref('move').set('+');
  }

  less() {
    firebase.database().ref('move').set('-');
  }
}

window.customElements.define("control-component", ControlComponent);
