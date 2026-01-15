// import Button from "@mui/material/Button";
import Button from "../Button/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import s from "./BasicButtonGroup.module.css";

const BasicButtonGroup = () => {
  const handleClick = () => {
    console.log("Button One Clicked");
  };

  return (
    <ButtonGroup
      className={s.list}
      variant="contained"
      aria-label="Basic button group"
    >
      <Button text="One" onClick={handleClick} />
      <Button text="Two" onClick={handleClick} />
      <Button text="Three" onClick={handleClick} />
    </ButtonGroup>
  );
};

export default BasicButtonGroup;
