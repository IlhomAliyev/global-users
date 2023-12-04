import { getPagesArray } from "../../utils/pages";
import { AppButton } from "../UI/AppButton/AppButton";
import classes from "./Pagination.module.scss";

interface IPaginationProps {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
}

const Pagination = ({ totalPages, page, changePage }: IPaginationProps) => {
  const pagesArray = getPagesArray(totalPages);
  const lastPage = pagesArray[pagesArray.length - 1];

  return (
    <div className={classes.Pagination}>
      <AppButton
        buttonLabel="<"
        onClick={() => changePage(page === 1 ? page : page - 1)}
      />
      {pagesArray.map((p) => (
        <AppButton
          key={p}
          onClick={() => changePage(p)}
          buttonLabel={String(p)}
          className={page === p ? `${classes.currentPage}` : ""}
        />
      ))}
      <AppButton
        buttonLabel=">"
        onClick={() => changePage(page === lastPage ? page : page + 1)}
      />
    </div>
  );
};

export default Pagination;
