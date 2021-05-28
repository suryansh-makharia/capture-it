import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background: #1d1f22;
      font-family: 'Montserrat', sans-serif;
      overflow-x: hidden;
    }
    html {
      @media (max-width: 1700px) {
        font-size: 75%;
        padding: 0;
      }
    }
    button {
      outline: none;
      border: 2px solid #23d997;
      cursor: pointer;
      font-size: 1rem;
      border-radius: 0.4rem;
      padding: 1rem;
      background: transparent;
      color: white;
      transition: all 0.5s ease;
      &:hover {
        background: #23d997;
        color: white
      }
    }
    h2 {
      font-weight: lighter;
      font-size: 3.6rem;
      color: white;
    }
    h3 {
      color: #c9d1d9;
    }
    h4 {
      font-weight: bold;
      color: #23d997;
    }
    a {
      font-size: 1.1rem;
    }
    span {
      font-weight: bold;
      color: #23d997;
    }
    p{
      color: #c9d1d9;
      padding: 3rem 0;
      font-size: 1.4rem;
      line-height: 2.3rem;
    }
`;
export default GlobalStyle;
