import React from "react";
import styles from "./AppInput.module.scss";

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
    <div className={styles.inputWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.AppInput}
        value={value}
        onChange={onChange}
      />
      <p className={styles.resultCount}>{resultCount}</p>
    </div>
  );
};
