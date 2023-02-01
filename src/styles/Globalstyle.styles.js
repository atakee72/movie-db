import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    margin: 0px;
    padding: 0px;
    background-color: ${(props) =>
      props.theme.colors.primary ? props.theme.colors.primary : "#2b3452"};
    margin: 0;
    font-family: "Poppins";
    color: white;
    height: 100;
}

main {
    padding: 10px 10px
}

header {
    padding: 10px 10px
}

nav h1 {
    margin-right: auto;
    border-bottom: 3px solid ${(props) =>
      props.theme.colors.secondary ? props.theme.colors.secondary : "#bc4123"};
  }

.active {
    background-color: ${(props) =>
      props.theme.colors.secondary ? props.theme.colors.secondary : "#bc4123"};
    padding: 0 10px 0 10px;
    border-radius: 4px;
    margin: 6px 6px
  }

a {
    border-radius: 4px;
    &:hover {
      color: ${(props) =>
        props.theme.colors.primary ? props.theme.colors.secondary : "#bc4123"};
        }
}

  span {
    border-bottom: 3px solid ${(props) =>
      props.theme.colors.secondary ? props.theme.colors.secondary : "#bc4123"};;
  }

  .internalink {
    border-bottom: 3px solid ${(props) =>
      props.theme.colors.secondary ? props.theme.colors.secondary : "#bc4123"};
    display: inline-block;
  }

  .imgAsLink {
    display: inline-block;
    opacity: 0.80;
    &:hover {
      opacity: 1;
        }
  }

  img.poster {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    background-color: none;
 }
 
.cardContainer {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
  color: black;
  padding: 5px;
  margin: 20px auto 20px auto;
  max-width: 75%;
  max-height: 35vh;
  text-align: center;   
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}

::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
::-webkit-scrollbar-track {
    background: ${(props) =>
      props.theme.colors.primary ? props.theme.colors.primary : "#2b3452"};
  }
  
  /* Handle */
::-webkit-scrollbar-thumb {
    background: ${(props) =>
      props.theme.colors.secondary ? props.theme.colors.secondary : "#bc4123"};
  }

`;

export { GlobalStyle };
