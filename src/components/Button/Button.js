import styled from "styled-components";

const Button = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  box-shadow: 5px 5px 10px black, 5px 5px 10px lightgrey inset;
  background-color: grey;
  cursor: pointer;
  border-radius: 50%;
  color: white;
  &: active{
    transform: scale(0.9);
  }
`;

export default Button;
