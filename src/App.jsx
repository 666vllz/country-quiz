import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import GameWrapper from "./components/GameWrapper";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      const data = response.data;
      const allCountries = data.map(({ name, capital, flag }) => ({
        name: name.common,
        capital: capital ? capital[0] : undefined,
        flag: flag,
      }));
      const onlyWithCapitalCountries = allCountries.filter(
        (country) => country.capital != undefined
      );
      setCountries(onlyWithCapitalCountries);
    });
  }, []);

  return (
    <div className="App">
      {countries.length === 0 ? (
        "Loading..."
      ) : (
        <GameWrapper countries={countries} />
      )}
    </div>
  );
}

export default App;
