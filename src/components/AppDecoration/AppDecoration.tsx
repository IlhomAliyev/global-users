import { useLayoutEffect, useState } from "react";
import { ThemeToggle } from "../UI/ThemeToggle/ThemeToggle";
import darkBg from "/images/bg-dark.jpg";
import lightBg from "/images/bg-light.jpg";
import classes from "./AppDecoration.module.scss";

export const AppDecoration = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("appTheme") || "light"
  );

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useLayoutEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("appTheme", theme);
  }, [theme]);

  return (
    <>
      <header className={classes.Header}>
        <h1>GlobalSolutions | IlhomAliyev</h1>
        <ThemeToggle isDarkTheme={theme !== "light"} onChange={toggleTheme} />
      </header>
      <img
        className={classes.bgImage}
        src={theme === "light" ? lightBg : darkBg}
        alt="Background Image"
      />
    </>
  );
};
