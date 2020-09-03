import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import styles from "./DetailsPage.scss";
import Header from "../Header/Header";

const DetailsPage = () => {
  const { detailId } = useParams();
  const [pokemon, setPokemon] = useState({
    name: "",
    img: "",
  });
  const [characteristic, setCharacteristics] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${detailId}`)
      .then(({ data }) => {
        setPokemon((state) => ({
          ...state,
          name: data.name,
          img: data.sprites.front_default,
        }));
        return data;
      })
      .then((res) => {
        setAbilities(res.abilities.map((it) => it.ability.name));
        setTypes(res.types.map((it) => it.type.name));
        return res;
      })
      .then((res) =>
        axios
          .get(`https://pokeapi.co/api/v2/characteristic/${res.id}/`)
          .then(({ data }) =>
            setCharacteristics(data.descriptions[2].description)
          )
      );
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.name}>{pokemon.name}</h1>
      <div>
        <i>{characteristic}</i>
      </div>
      <img src={pokemon.img} alt="pokemon" />
      <div>
        <h3>Type:</h3>
        {types.map((type) => (
          <div key={type}>{type}</div>
        ))}
      </div>
      <div>
        <h3>Abilities:</h3>
        <ul>
          {abilities.map((ability) => (
            <Link to={`/${detailId}/${ability}`} key={ability}>
              <li>{ability}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailsPage;
