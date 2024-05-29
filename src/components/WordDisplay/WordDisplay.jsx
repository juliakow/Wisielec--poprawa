import React, { useContext } from "react";
import GameContext from "../Game/GameContext";

const WordDisplay = () => {
    const { randomWord, selectedLetters } = useContext(GameContext);

    // Funkcja do sprawdzenia, czy litera jest częścią słowa
    const isLetterInWord = (letter) => {
        return randomWord.toLowerCase().split('').includes(letter.toLowerCase());
    };

    // Mapowanie każdego znaku słowa do odpowiedniego wyświetlania
    return (
        <div className="word-display">
            {randomWord.split('').map((char, index) => {
                // Jeśli litera nie została jeszcze odgadnięta, wyświetlamy '_'
                if (!isLetterInWord(char) &&!selectedLetters.includes(char)) {
                    return <span key={index}>_ </span>;
                }
                // Jeśli litera została odgadnięta, wyświetlamy samą literę
                else {
                    return <span key={index}>{char} </span>;
                }
            })}
        </div>
    );
};

export default WordDisplay;
