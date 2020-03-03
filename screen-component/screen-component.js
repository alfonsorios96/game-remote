import {html, LitElement} from 'lit-element';
import style from './screen-component-styles.js';

class ScreenComponent extends LitElement {

  static get styles() {
    return style;
  }

  firstUpdated() {
    firebase.database().ref('move').on('value', snapshot => {
      this.shadowRoot.querySelector('.screen').innerText = snapshot.val();
    });
  }

  render() {
    return html`
        <div class="screen">

        </div>
      `;
  }
}

window.customElements.define("screen-component", ScreenComponent);
