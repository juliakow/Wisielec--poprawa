const Keyboard = (props) => {
  const { onSelectLetter, selectedLetters } = props;
  const letters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ].map(letter => letter.toLowerCase());

  return (
    <div className="keyboard">
      {letters.map(letter => 
        <button 
          key={letter} 
          onClick={() => onSelectLetter(letter)} 
          disabled={selectedLetters.includes(letter)}
        >
          {letter}
        </button>
      )}
    </div>
  )
}

export default Keyboard;
