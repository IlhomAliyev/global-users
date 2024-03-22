import React from "react";
import styles from "./AppButton.module.scss";

interface IAppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonLabel: string;
}

export const AppButton = ({
  type = "button",
  buttonLabel,
  className,
  onClick,
}: IAppButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.AppButton} ${className}`}
    >
      {buttonLabel}
    </button>
  );
};
