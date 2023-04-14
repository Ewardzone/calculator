import { evaluate } from 'mathjs';
import React, { useState } from "react";
import CalculatorContainer from "./CalculatorContainer";
import Screen from "../Display/Display";
import Button from "../Button/Button";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setResult(result + value);
  };

  const handleClear = () => {
    setResult("");
  };

  const handleEqual = () => {
    setResult(evaluate(result));
  };

  return (
    <CalculatorContainer>
      <span style={{color:'lightgrey', fontSize:'2rem', textShadow:'5px 5px 10px black'}}>EWZN</span>
      <Screen result={result} />
      <div style={{display:"flex",
    gap:'8%', width:'-webkit-fill-available', justifyContent:'space-between'}}>
        <Button onClick={() => handleClick("7")}>7</Button>
        <Button onClick={() => handleClick("8")}>8</Button>
        <Button onClick={() => handleClick("9")}>9</Button>
        <Button onClick={() => handleClick("+")} style={{background:'#B7911C'}}>+</Button>
      </div>
      <div style={{display:"flex",
    gap:'8%', width:'-webkit-fill-available', justifyContent:'space-between'}}>
        <Button onClick={() => handleClick("4")}>4</Button>
        <Button onClick={() => handleClick("5")}>5</Button>
        <Button onClick={() => handleClick("6")}>6</Button>
        <Button onClick={() => handleClick("-")} style={{background:'#B7911C'}}>-</Button>
      </div>
      <div style={{display:"flex",
    gap:'8%', width:'-webkit-fill-available', justifyContent:'space-between'}}>
        <Button onClick={() => handleClick("1")}>1</Button>
        <Button onClick={() => handleClick("2")}>2</Button>
        <Button onClick={() => handleClick("3")}>3</Button>
        <Button onClick={() => handleClick("*")} style={{background:'#B7911C'}}>*</Button>
      </div>
      <div style={{display:"flex",
    gap:'8%', width:'-webkit-fill-available', justifyContent:'space-between'}}>
        <Button onClick={() => handleClick("0")}>0</Button>
        <Button onClick={() => handleClick(".")}>.</Button>
        <Button onClick={handleClear}>C</Button>
        <Button onClick={() => handleClick("/")} style={{background:'#B7911C'}}>/</Button>
      </div>
      <div style={{margin:'auto'}}>
        <Button onClick={handleEqual} style={{width:'15rem', background:'#1AA634'}}>=</Button>
      </div>
    </CalculatorContainer>
  );
};

export default Calculator;
