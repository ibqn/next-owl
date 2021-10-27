import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;

    font-family: ${({ theme }) => theme.fontFamily};

    background: #f5f6f8;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
`

export default GlobalStyles
