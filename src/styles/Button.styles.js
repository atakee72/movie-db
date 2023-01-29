import styled from "styled-components";

const Button = styled.button`

  background-color: ${(props) =>
    props.theme.colors.secondary ? props.theme.colors.secondary : "#bc4123"};


  color: white;

  font-size: 16px;
  margin: 7px 7px;
  cursor: pointer;
  border: none;
  padding: 10px;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) =>
  props.theme.colors.secondary ? props.theme.colors.secondary : "#bc4123"};
    span {
      border-bottom: 3px solid ${(props) =>
      props.theme.colors.secondary ? props.theme.colors.primary : "#2b3452"};
    }
  }
`;

const Button2 = styled.button`

  background-color: ${({user, backgroundColor}) =>
    user ? backgroundColor : backgroundColor};

  color: white;
  font-size: 16px;
  margin: 7px 7px;
  cursor: pointer;
  border: none;
  padding: 10px;
  border-radius: 4px;

  &:hover {
    padding: 15px;
  }
`;

export { Button, Button2 };
