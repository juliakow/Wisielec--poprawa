import React from "react";


const WordDisplay = (props) => {
    const { randomWord, selectedLetters } = props;



    return (
        <div>
        {randomWord.split("").map((letter, index) => 
            selectedLetters.includes(letter) ? letter : "_"
        ).map(letter => <span>{letter}</span>)}
    </div>
    );
};

export default WordDisplay;
