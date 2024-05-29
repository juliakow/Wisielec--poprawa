import React from "react";
import { createContext, useEffect } from "react";
import { useState } from "react";




const GameContext = createContext();

export const GameProvider = (props) => {
    const {children} = props;
    const [randomWord, setRandomWord] = useState("");
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [attempts, setAttempts] = useState(0);

    useEffect(() => {
        setRandomWord(generateRandomWord());
    }, []);

    const generateRandomWord = () => {
        const randomIndex =   Math.floor(Math.random() * Words.length); //= useEffect();
        return Words[randomIndex]
    }

    // const handleLetterClick = (props, prevLetters) => {
    //     const letter = props;
    //     selectedLetters((props) => {
    //         const prevLetters = props;
    //     }, [...prevLetters, letter])
    //     // tutaj bedzie logika sprawdzajaca czy litera jest poprawna
    // }
    const handleLetterClick = (letter) => {
        if (!selectedLetters.includes(letter)) {
            setSelectedLetters([...selectedLetters, letter]);
            if (!randomWord.toLowerCase().includes(letter.toLowerCase())) {
                setAttempts(attempts + 1);
            }
        }
    };

    const resetGame = () => {
        setRandomWord(generateRandomWord());
        setSelectedLetters([]);
        setAttempts(0);
    };
    

    return(
        <GameContext.Provider value={{randomWord, setRandomWord, selectedLetters, setSelectedLetters, attempts, setAttempts, handleLetterClick, resetGame}}>
            {children}
        </GameContext.Provider>

    )
}

export default GameContext;