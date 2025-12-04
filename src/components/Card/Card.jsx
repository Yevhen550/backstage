import React from "react";
import s from "./Card.module.css";

const Card = ({ text }) => {
  return <div className={s.card}>{text}</div>;
};

export default Card;
