import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";

import styles from "./AbilitiesPage.scss";

const AbilitiesPage = () => {
  const { detailId, ability } = useParams();
  const [abilityDescription, setAbilities] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/ability/${ability}/`)
      .then(({ data }) => {
        setAbilities(
          data["effect_entries"].filter((it) => it.language.name === "en")[0]
        );
      });
  }, []);
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Header detailId={detailId} />
        <h3>Effect</h3>
        {abilityDescription.effect}
        <h3>Short Effect</h3>
        {abilityDescription.short_effect}
      </div>
    </div>
  );
};

export default AbilitiesPage;
