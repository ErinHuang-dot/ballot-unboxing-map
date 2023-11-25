import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Color pallete */
    --primary: hsl(316, 100%, 42%);
    --text-primary: hsl(215, 25%, 27%);
    --text-secondary: hsl(215, 16%, 47%);
    --bg-color: hsl(210, 16%, 93%);
    --hover-color: hsl(210, 17%, 98%);
    --line-color: hsl(210, 14%, 89%);
    --role1: hsl(239, 100%, 75%);
    --role2: hsl(25, 86%, 70%);
    --role3: hsl(160, 58%, 58%);
  }

  .u-container {
    max-width: var(--grid-max-width);
    padding-inline: var(--grid-gutter);
    margin-inline: auto;
  }

  .u-grid {
    display: grid;
    gap: var(--grid-gutter);
  }
`

export default GlobalStyles;