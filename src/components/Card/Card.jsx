import React from "react";

import styles from "./Card.scss";

const Card = React.memo(({ name, url }) => {
  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${url})`,
        }}
      />
      <span className={styles.name}>{name}</span>
    </div>
  );
});

export default Card;
