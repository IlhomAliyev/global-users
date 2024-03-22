import React from "react";
import styles from "./AppSelect.module.scss";

interface IOption {
  name: string;
  value: string | number;
}

interface IAppSelectProps {
  value: string | number;
  defaultValue: string;
  options: IOption[];
  onChange: (value: string | number) => void;
}

export const AppSelect = ({
  options,
  value,
  defaultValue,
  onChange,
}: IAppSelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select value={value} onChange={handleChange} className={styles.AppSelect}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
