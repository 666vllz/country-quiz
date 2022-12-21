import { useEffect, useState } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const GameWrapper = ({ countries }) => {
  const [correct, setCorrect] = useState({});
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(undefined);

  useEffect(() => {
    const randomCountries = [];
    while (randomCountries.length != 4) {
      const country = getRandomCountry();
      if (randomCountries.includes(country)) {
        continue;
      }
      randomCountries.push(country);
    }
    const correctCountry =
      randomCountries[getRandomInt(0, randomCountries.length)];
    setCorrect(correctCountry);
    setOptions(randomCountries);
  }, []);

  const getRandomCountry = () => {
    const randomIndex = getRandomInt(0, countries.length);
    return countries[randomIndex];
  };

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="game-wrapper">
      <div className="Question">
        <b id="capital">{correct.capital}</b> is the capital of
      </div>
      {options.map((option, index) => (
        <button
          key={index}
          className="option"
          id={
            selectedAnswer
              ? option.capital === correct.capital
                ? "correct"
                : "incorrect"
              : ""
          }
          onClick={() => handleClick(option.capital)}
          value={option.capital}
        >
          {option.flag} {option.name}
        </button>
      ))}
    </div>
  );
};

export default GameWrapper;
