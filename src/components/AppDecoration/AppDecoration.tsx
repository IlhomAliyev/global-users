import { useLayoutEffect, useState } from "react";
import { ThemeToggle } from "../UI/ThemeToggle/ThemeToggle";
import darkBg from "./../../../public/images/bg-dark.jpg";
import lightBg from "./../../../public/images/bg-light.jpg";
import classes from "./AppDecoration.module.scss";

export const AppDecoration = () => {
  const [theme, setTheme] = useState("light");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useLayoutEffect(() => {
    isDarkTheme ? setTheme("light") : setTheme("dark");
    document.body.dataset.theme = theme;
  }, [theme, isDarkTheme]);

  return (
    <>
      <header className={classes.Header}>
        <h1>GlobalSolutions | IlhomAliyev</h1>
        <ThemeToggle
          isDarkTheme={isDarkTheme}
          onChange={() => setIsDarkTheme(!isDarkTheme)}
        />
      </header>
      <img
        className={classes.bgImage}
        src={theme === "light" ? lightBg : darkBg}
        alt="Background Image"
      />
    </>
  );
};
