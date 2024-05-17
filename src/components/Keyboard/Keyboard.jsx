import React, { useContext } from "react";
import GameContext from "../Game/GameContext";



const Keyboard = () => {
    const {selectedLetters} = useContext(GameContext);
    const letters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      ];

      return(
       <div className="keyboard">{letters.map(letter  => 
            <button>{letter}</button>
       )}</div> 
      )
      
}


export default Keyboard;