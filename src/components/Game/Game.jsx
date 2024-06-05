import { useState, useEffect } from "react";
import Keyboard from "../Keyboard/Keyboard";
import WordDisplay from "../WordDisplay/WordDisplay";
// import Illustration from "../Illustration/Illustration";
import words from "../../Words.json"; 

const Game = () => {
    const [randomWord, setRandomWord] = useState("");
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [attempts, setAttempts] = useState(0);

    useEffect(() => {
        const selectRandomWord = () => {
            const randomIndex = Math.floor(Math.random() * words.length);
            setRandomWord(words[randomIndex]);
        };

        selectRandomWord();
    }, []);

    const handleSelectLetter = (letter) => {
        if (!selectedLetters.includes(letter)) {
            setSelectedLetters([...selectedLetters, letter]);
        }
    };

    console.log(selectedLetters)

    return (
        <div className="game">
            <WordDisplay randomWord={randomWord} selectedLetters={selectedLetters} />
            <Keyboard onSelectLetter={handleSelectLetter} selectedLetters={selectedLetters} />
        </div>
    );
};

export default Game;
