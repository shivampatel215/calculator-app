import React from "react";
import "./styles/display.css";
const Display = ({ input, setInput, answer }) => {
    
    
    function handleInputChange(e) {
      if (e.target.value === "") {
        setInput(e.target.value);
      }
    } ;
  
    return (
      
        <div className="display">
          {answer === "" ? (
            
              <input
                type="text"
                name="input"
                className="input"
                value={input}
                placeholder="0"
                onChange={handleInputChange}
                autoComplete="off"
              />
            
          ) : (
            <>
              <input
                type="text"
                name="input"
                className="value"
                value={input}
                placeholder="0"
                disabled
              />
              <input
                type="text"
                name="value"
                className="input"
                value={answer}
                
              />
            </>
          )}
        </div>
    );
  };
  
  export default Display;