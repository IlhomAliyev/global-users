import classes from "./Loader.module.scss";

interface ILoaderProps {
  isLoading: boolean;
}

export const Loader = ({ isLoading }: ILoaderProps) => {
  return (
    <div
      className={
        isLoading
          ? `${classes.Loader} ${classes.Loader_active}`
          : classes.Loader
      }
    ></div>
  );
};
