import React from "react";
import s from "./Tittle.module.css";

const Tittle = ({ name }) => {
  return <div className={s.tittle}>{name}</div>;
};

export default Tittle;
