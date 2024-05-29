import React, { useEffect } from "react";
import { useState } from "react";
import Keyboard from "../Keyboard/Keyboard";
import WordDisplay from "../WordDisplay/WordDisplay";
import Ilustration from "../Ilustration/Ilustration";
import Words from "../../Words.json";
import { GameProvider } from "./GameContext";
import GameContext from "./GameContext";

const Game = () => {
    useEffect(() => {
        setRandomWord(generateRandomWord());
    }, []);
    


const randomWord = generateRandomWord();
console.log("Wtygenerowane słowo:", randomWord);

    return(
        <div className="game">
            <GameProvider>
            <WordDisplay/>
            <Keyboard  />
            <Ilustration />
            </GameProvider>
        </div>
    )
}
export default Game;