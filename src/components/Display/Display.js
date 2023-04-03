import React from "react";
import styled from "styled-components";

const ScreenContainer = styled.div`
  height: 50px;
  width: 17.5rem;
  border: 5px grey groove;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 2.5rem;
  padding: 0 10px;
  border-radius: 1rem;
  background-color: lightgrey;
  box-shadow: 5px 5px 10px black;
  
`;

const Screen = ({ result }) => {
  return <ScreenContainer>{result}</ScreenContainer>;
};

export default Screen;
