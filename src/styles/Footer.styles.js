import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-context: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme.colors.secondary ? props.theme.colors.secondary : "#bc4123"};
  position: absolut;
  right: 0;
  left: 0;
  bottom: 0;
  top: 100vh;
  text-align: center;
  width: 100%;

  h3 {
    color: ${({ color }) => color};
    &:hover {
      color: #2b3452;
    }
  }
`;

export { Footer };
