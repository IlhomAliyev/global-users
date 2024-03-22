import styles from "./Loader.module.scss";

interface ILoaderProps {
  isLoading: boolean;
}

export const Loader = ({ isLoading }: ILoaderProps) => {
  return (
    <div
      className={
        isLoading ? `${styles.Loader} ${styles.Loader_active}` : styles.Loader
      }
    ></div>
  );
};
