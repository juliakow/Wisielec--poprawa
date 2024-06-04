import { useEffect, useState } from "react";

const WordDisplay = (props) => {
    const { words, selectedLetters } = props;
    const [wordsVisible, setWordsVisible] = useState("");

    useEffect(() => {
        if (selectedLetters && selectedLetters.length > 0) {
            setWordsVisible(words.filter(word => word.includes(selectedLetters.join(""))).join(" "));
        } else {
            setWordsVisible(words.join(" "));
        }
    }, [selectedLetters, words]);

    return (
        <div>
            {wordsVisible}
        </div>
    );
};

export default WordDisplay;
