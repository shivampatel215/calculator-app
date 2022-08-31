import React from 'react';
import Display from "./Display";
import Buttons from "./Buttons";
import "./styles/calculator.css";
import {useState} from "react";
import {evaluate, round,} from "mathjs";

function Calculator() {

    const [input, setInput] = useState("");
    const [answer, setAnswer] = useState("");

    function handleInput(click) {
        let value = click.target.innerText;
        let string = input + value;
    
        if (answer !== "") {
          setInput(answer + value);
          setAnswer("");
        } else setInput(string);
    };

    function handleAllClear() {
        setInput("");
        setAnswer("");
    }
    function handleAnswer() {
        let result = 0;
        let finalexpression = input;
        finalexpression = finalexpression.replaceAll("x", "*");
        finalexpression = finalexpression.replaceAll("÷", "/");
    
        try {
          result = evaluate(finalexpression); 
        } catch (error) {
          result = "Sorry too advanced for me"; 
        }
        result ? setAnswer(result) : setAnswer(round(result, 3))
      };

  return (
    <div className = "main">
        <div className="calculator">
            <Display input={input} setInput={setInput} answer={answer}/>
            <Buttons 
            inputHandler={handleInput}
            clearInput={handleAllClear}
            calculateAns={handleAnswer}/>
        </div>
    </div>
  )
}

export default Calculator