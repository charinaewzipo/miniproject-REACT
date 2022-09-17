import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [countries, setCountries] = useState([]);
  const apiUrl = "https://restcountries.com/v2/all";

  const [word, setWord] = useState("");
  //สนใจแค่nameกับcapital
  const [dataFilter] = useState(["name", "capital"]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        console.log(data);
      });
  }, []);

  const searchCountries = (countries) => {
    return countries.filter((item) => {
      return dataFilter.some((filter) => {
        return item[filter]?.toLowerCase().indexOf(word.toLowerCase()) > -1;
      });
    });
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="container">
      <div className="search-container">
        <label htmlFor="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="ค้นหาประเทศที่ต้องการ"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          ></input>
        </label>
      </div>
      <ul className="row">
        {searchCountries(countries).map((item, index) => {
          return (
            <li key={index}>
              <div className="card">
                <div className="card-title">
                  <img src={item.flag} alt=" " />
                </div>
                <div className="card-body">
                  <div className="card-description">
                    <h2>{item.name}</h2>
                    <ol className="card-list">
                      <li>ประชากร :{numberWithCommas(item.population)}</li>
                      <li>ภูมิภาค :{item.region}</li>
                      <li>เมืองหลวง :{item.capital}</li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
