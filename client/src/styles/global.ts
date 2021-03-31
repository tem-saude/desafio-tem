import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  :root {
    // Variaveis para as cores da aplicação
    --background: #f0f2f5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // 1 rem = 1 font-size 
  html {
    @media (max-width: 1080px) { // Quando a tela estiver em até 1080px
      font-size: 93,75%; // 16 x 0,9375 = 15px
    }

    @media (max-width: 720px) {
      font-size: 87,5%; // 16 x 0,875 = 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
  }

  button {
    cursor: pointer;
  }
`