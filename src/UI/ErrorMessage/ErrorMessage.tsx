import styles from "./ErrorMessage.module.scss";

interface IErrorMessageProps {
  message: string;
  isError: boolean;
}

export const ErrorMessage = ({ message, isError }: IErrorMessageProps) => {
  return (
    <h2 className={isError ? styles.errorMessage : styles.hidden}>{message}</h2>
  );
};
