import { useEffect, useState } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const GameWrapper = ({ countries }) => {
  const [correct, setCorrect] = useState({});
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const randomCountries = [];
    while (randomCountries.length != 4) {
      const country = getRandomCountry();
      if (randomCountries.includes(country)) {
        continue;
      }
      randomCountries.push(country);
    }
    const correctCountry = randomCountries[getRandomInt(0, randomCountries.length)]
    setCorrect(correctCountry)
    setOptions(randomCountries);
  }, []);

  const getRandomCountry = () => {
    const randomIndex = getRandomInt(0, countries.length);
    return countries[randomIndex];
  };

  const handleClick = (event) => {
    const value = event.target.value
    if (value === correct.capital) {
      alert("That's rigth")
    } else {
      alert(`Wrong, it was ${correct.name}`)
    }
  };

  return (
    <div className="game-wrapper">
      <div className="Question">{correct.capital} is the capital of</div>
      {options.map((option, index) => (
        <button
          key={index}
          className="option"
          onClick={handleClick}
          value={option.capital}
        >
          {option.flag} {option.name}
        </button>
      ))}
      {/* <button
        className="option"
        onClick={handleClick}
        value={correctCountry.name}
      >
        {correctCountry.flag} {correctCountry.name}
      </button>
      <button className="option">
        {correctCountry.flag} {correctCountry.name}
      </button>
      <button className="option">
        {correctCountry.flag} {correctCountry.name}
      </button>
      <button className="option">
        {correctCountry.flag} {correctCountry.name}
      </button> */}
      {/* <h1>List of Countries</h1>
      {countries.map((country, index) =>
        country.capital ? (
          <div key={index}>
            {country.flag} The capital of {country.name} is {country.capital}{" "}
            {country.flag}
          </div>
        ) : (
          <div key={index}>
            {country.flag} {country.name} has no capital {country.flag}
          </div>
        )
      )} */}
    </div>
  );
};

export default GameWrapper;
