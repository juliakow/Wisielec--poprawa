import React from "react";
import { createContext } from "react";
import { useState } from "react";

const GameContext = createContext();

export const GameProvider = (props) => {
    const {children} = props;
    const [randomWord, setRandomWord] = useState('');
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [attempts, setAttempts] = useState(0);


    return(
        <GameContext.Provider value={{randomWord, setRandomWord, selectedLetters, setSelectedLetters, attempts, setAttempts}}>
            {children}
        </GameContext.Provider>

    )
}

export default GameContext;