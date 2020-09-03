import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

import styles from "./HomePage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then(({ data }) => {
        return data.results;
      })
      .then((res) =>
        res.map((it) =>
          axios.get(it.url).then(({ data }) => {
            setPokemons((state) => [
              ...state,
              { url: data.sprites.front_default, name: data.name },
            ]);
          })
        )
      );
  }, []);

  const handleChange = (e) => setFilterText(e.target.value);

  const dataToPass = pokemons.filter(
    (it) => it.name.indexOf(filterText) !== -1
  );

  return (
    <div className={styles.homeContainer}>
      <h1>Pokemons - Let's Go!!!</h1>
      <input value={filterText} onChange={handleChange} />
      <div className={styles.cardsContainer}>
        {dataToPass.map((pokemon) => (
          <Link key={pokemon.name} to={`${pokemon.name}`}>
            <Card {...pokemon} url={pokemon.url} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
