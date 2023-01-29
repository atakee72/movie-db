import styled from "styled-components";

const Container = styled.div`
  width: 30vw;
  height: 20vh;
  background-color: ${(props) =>
    props.theme.colors.primary ? props.theme.colors.primary : "#2b3452"};

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export { Container };
