import {
  LitElement,
  css,
  html,
  nothing,
  repeat,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";
import { typeStyles } from "./type-styles.js";
import "./wc-card.js";

export class Gallery extends LitElement {
  static properties = {
    cards: { type: Array },
  };

  static styles = [
    typeStyles,
    css`
      :host {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1em;
      }

      @media (min-width: 350px) {
        :host {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (min-width: 750px) {
        :host {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    `,
  ];

  render() {
    return html`
      ${this.cards
        ? repeat(
            this.cards,
            this._id,
            (item, index) => html`
              <wc-card
                ?translated="${item.translated}"
                card-type="${item.type}"
                rarity="${item.rarity}"
                release="${item.release}"
                witch="${item.witch}"
              ></wc-card>
            `
          )
        : "Loading..."}
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.baseUrl = window.BASEURL;
  }

  _id = (card) => card.witch + card.release + card.rarity;
}

customElements.define("wc-gallery", Gallery);
