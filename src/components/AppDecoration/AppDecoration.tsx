import { useEffect, useState } from "react";
import { AppButton } from "../UI/AppButton/AppButton";
import darkBg from "./../../../public/images/bg-dark.jpg";
import lightBg from "./../../../public/images/bg-light.jpg";
import classes from "./AppDecoration.module.scss";

export const AppDecoration = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <header className={classes.Header}>
        <h1>GlobalSolutions | IlhomAliyev</h1>
        <AppButton onClick={toggleTheme} buttonLabel="Тема" />
      </header>
      <img
        className={classes.bgImage}
        src={theme === "light" ? lightBg : darkBg}
        alt="Background Image"
      />
    </>
  );
};
