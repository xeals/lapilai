import { css } from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";

export const typeStyles = css`
  [card-type="T"] {
    --type-color: var(--type-tech);
  }

  [card-type="S"] {
    --type-color: var(--type-speed);
  }

  [card-type="P"] {
    --type-color: var(--type-prot);
  }

  [card-type="M"] {
    --type-color: var(--type-magic);
  }

  [card-type="X"] {
    --type-color: var(--type-aux);
  }
`;
