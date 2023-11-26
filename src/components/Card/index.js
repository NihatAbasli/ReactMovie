import React, { useState } from "react";
import styles from "./Card.module.css";

export const Card = ({ Data }) => {
  // console.log(Data)
  const { Title, Year, imdbID, Type, More, Poster } = Data;

  //   console.log(Title)

  const [change, setChange] = useState(true);

  const [show, setShow] = useState(false);

  const handleShowClick = () => {
    setShow(!show);
  };

  const handleChange = () => {
    setChange(!change);
  };

  return (
    <div className={styles.container}>
      <button
        style={
          change
            ? { backgroundColor: "#28a745" }
            : { backgroundColor: "#DC3545" }
        }
        className={styles.btnCorner}
        onClick={handleChange}
      >
        {change ? "Add" : "Remove"}
      </button>
      <img src={Poster} width={200} alt="image" />
      <h2>{Title}</h2>
      <h3>{Year}</h3>
      <button onClick={handleShowClick} className={styles.aboutBtn}>
        About
      </button>
      {show ? <p className={styles.info}>{More}</p> : ""}
    </div>
  );
};
