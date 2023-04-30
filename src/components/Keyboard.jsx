import { useEffect, useContext, useCallback } from "react";
import Keys from "./Keys";
import { Appcontext } from "../App";

const Keyboard = () => {
  const { otherKey, deleteKey, enterKey,disabledLetters} = useContext(Appcontext);
  const topkeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const midkeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottomkeys = ["Z", "X", "C", "V", "B", "N", "M"];

  
  // the handlekeyboard basically does the job of handling the keypresses and also printing and deleting them.
  // here we are using the usecallback hook to improve performance
   // here the event is going to contain which key on the keyboard are we going to type.
  const handleKeyboard = useCallback((event) => {
   

    if (event.key === "Enter") {
      enterKey();
    } 
    
    
    else if (event.key === "Backspace") {
      deleteKey();
    } 
    
    
    // for detecting other keys
    else {
      topkeys.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          otherKey(key);
        }
      });

      midkeys.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          otherKey(key);
        }
      });

      bottomkeys.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          otherKey(key);
        }
      });
    }
  }
  );

  // the useeffect will be used to give input directly from the keyboard.
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <>
      <div class="keyboard" onKeyDown={handleKeyboard}>
        {/* the first div is for the top row */}
        <div class="toprow">
          {topkeys.map((key) => {
            return (
              <div>
                <Keys keyval={key} usable={!disabledLetters.includes(key)}/>
              </div>
            );
          })}
        </div>
        {/* the second div is for the middle row */}
        <div class="midrow">
          {midkeys.map((key) => {
            return (
              <div>
                <Keys keyval={key} usable={!disabledLetters.includes(key)}/>
              </div>
            );
          })}
        </div>
        {/* the first div is for the bottom row */}
        <div class="bottomrow">
          <div>
            <Keys keyval={"Enter"} isenter={"true"}  />
          </div>

          {bottomkeys.map((key) => {
            return (
              <>
                <div>
                  <Keys keyval={key} usable={!disabledLetters.includes(key)}/>
                </div>
              </>
            );
          })}

          <div>
            <Keys keyval={"Delete"} isdelete={"true"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Keyboard;
