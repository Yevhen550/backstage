import React from "react";
import s from "./Button.module.css";

const Button = ({ text = "Click", onClick }) => {


  return (
    <div>
      <button className={s.btn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
