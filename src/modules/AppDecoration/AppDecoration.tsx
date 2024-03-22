import { useLayoutEffect, useState } from "react";
import { ThemeToggle } from "../../UI/ThemeToggle/ThemeToggle";
import styles from "./AppDecoration.module.scss";
import darkBg from "/images/bg-dark.jpg";
import lightBg from "/images/bg-light.jpg";

export const AppDecoration = () => {
  // console.log("AppDecoration Render")

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
      <header className={styles.Header}>
        <h1>GlobalUsers | IlhomAliyev</h1>
        <ThemeToggle isDarkTheme={theme !== "light"} onChange={toggleTheme} />
      </header>
      <img
        className={styles.bgImage}
        src={theme === "light" ? lightBg : darkBg}
        alt="Background Image"
      />
    </>
  );
};
