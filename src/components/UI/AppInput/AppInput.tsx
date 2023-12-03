import React from "react";
import classes from "./AppInput.module.scss";

interface IAppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  resultCount: number;
}

export const AppInput = ({
  type,
  placeholder,
  value,
  onChange,
  resultCount,
}: IAppInputProps) => {
  return (
    <div className={classes.inputWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        className={classes.AppInput}
        value={value}
        onChange={onChange}
      />
      <p className={classes.resultCount}>{resultCount}</p>
    </div>
  );
};
