import { getPagesArray } from "../../utils/pages";
import classes from "./Pagination.module.scss";

interface IPaginationProps {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
}

const Pagination = ({ totalPages, page, changePage }: IPaginationProps) => {
  const pagesArray = getPagesArray(totalPages);

  return (
    <div className={classes.Pagination}>
      {pagesArray.map((p) => (
        <p
          onClick={() => changePage(p)}
          className={
            page === p
              ? `${classes.pageItem} ${classes.pageItem_current}`
              : classes.pageItem
          }
          key={p}
        >
          {p}
        </p>
      ))}
    </div>
  );
};

export default Pagination;
