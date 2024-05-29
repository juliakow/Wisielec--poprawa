import React, { useContext } from "react";
import GameContext from "../Game/GameContext";




const Keyboard = () => {
    const {selectedLetters, attempts, handleLetterClick} = useContext(GameContext);
    const letters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      ];

      return(
       <div className="keyboard">
        {letters.map(letter  => 
            <button key={letter} onClick={() => handleLetterClick(letter)} disabled={selectedLetters.includes(letter)}>
              {letter}
            </button>
        )}
        <button onClick={() => handleLetterClick('_')}>Reset</button>
       </div> 
      )
      
}


export default Keyboard;