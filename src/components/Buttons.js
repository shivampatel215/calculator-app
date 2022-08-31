import React from "react";
import "./styles/buttons.css";

const Buttons = ({ inputHandler, clearInput, calculateAns }) => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        document.getElementById("equalbtn").click();
      }
    });

    return (
        <div className="button-grid">
          <button className="btn operation" onClick={inputHandler}>
            ^
          </button>
          <button className="btn operation" onClick={inputHandler}>
            (
          </button>
          <button className="btn operation" onClick={inputHandler}>
            )
          </button>
          <button className="btn operation" onClick={inputHandler}>
            √
          </button>
          <button className="btn operation" onClick={inputHandler}>
            x<sup>2</sup>
          </button>
          <button className="btn operation" onClick={clearInput}>
            AC
          </button>
          <button className="btn operation">
            ⌫
          </button>
          <button className="btn operation" onClick={inputHandler}>
            log
          </button>
          <button className="btn operation" onClick={inputHandler}>
            ÷
          </button>
          <button className="btn operation" onClick={inputHandler}>
            %
          </button>
          <button className="btn" onClick={inputHandler}>
            7
          </button>
          <button className="btn" onClick={inputHandler}>
            8
          </button>
          <button className="btn" onClick={inputHandler}>
            9
          </button>
          <button className="btn operation" onClick={inputHandler}>
            x
          </button>
          <button className="btn operation" onClick={inputHandler}>
            x<sup>3</sup>
          </button>
          <button className="btn" onClick={inputHandler}>
            4
          </button>
          <button className="btn" onClick={inputHandler}>
            5
          </button>
          <button className="btn" onClick={inputHandler}>
            6
          </button>
          <button className="btn operation" onClick={inputHandler}>
            -
          </button>
          <button className="btn operation" onClick={inputHandler}>
            <sup>3</sup>√
          </button>
          <button className="btn" onClick={inputHandler}>
            1
          </button>
          <button className="btn" onClick={inputHandler}>
            2
          </button>
          <button className="btn" onClick={inputHandler}>
            3
          </button>
          <button className="btn operation" onClick={inputHandler}>
            +
          </button>
          <button className="btn operation" onClick={inputHandler}>
            !
          </button>
          <button className="btn operation" >

          </button>
          <button className="btn" onClick={inputHandler}>
            0
          </button>
          <button className="btn operation period" onClick={inputHandler}>
            .
          </button>
          <button className="btn operation equal" id="equalbtn" onClick={calculateAns}>
            =
          </button>
        </div>
      );
    };

export default Buttons;