import React from "react";
import { useState } from "react";
import Keyboard from "../Keyboard/Keyboard";
import WordDisplay from "../WordDisplay/WordDisplay";
import Ilustration from "../Ilustration/Ilustration";
import Words from "../../Words.json";

const Game = () => {


const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * Words.length)
}

    return(
        <div className="game">
            <WordDisplay/>
            <Keyboard  />
            <Ilustration />
        </div>
    )
}
export default Game;