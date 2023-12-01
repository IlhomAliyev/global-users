import React from "react";
import classes from "./AppInput.module.scss";

interface IAppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const AppInput = ({
  type,
  placeholder,
  value,
  onChange,
}: IAppInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classes.AppInput}
      value={value}
      onChange={onChange}
    />
  );
};
