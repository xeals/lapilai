import {
  LitElement,
  css,
  html,
  nothing,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";

export class Card extends LitElement {
  static properties = {
    witch: { type: String },
    rarity: { type: String },
    release: { type: String },
    translated: { type: Boolean },
    baseUrl: { state: true },
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      border-radius: 0.5em;
      border: 0.2em solid var(--type-color, #000);
      box-sizing: border-box;
      position: relative;
      height: 350px;
    }

    img {
      display: block;
      height: 350px;
      width: 100%;
      object-fit: cover;
      background-image: transparent;
    }

    caption {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2em;
      color: white;
      text-align: center;
      line-height: 2em;
      background: rgba(252, 77, 80, 0.5);
    }
  `;

  render() {
    const alt = this.release + " " + this.rarity + " " + this.witch;
    const slug = alt.replaceAll(" ", "-").toLowerCase();
    return html`
      <a href="${this.baseUrl}/card/${slug}">
        <img
          src="${this.baseUrl}/assets/images/cards/${slug}.jpg"
          alt="${alt}"
          loading="lazy"
        />
      </a>
      ${!this.translated
        ? html`
            <caption>
              Missing translation
            </caption>
          `
        : nothing}
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.baseUrl = window.BASEURL;
  }
}

customElements.define("wc-card", Card);
