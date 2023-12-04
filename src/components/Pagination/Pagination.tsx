import { getPagesArray } from "../../utils/pages";
import classes from "./Pagination.module.scss";

interface IPaginationProps {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
}

const Pagination = ({ totalPages, page, changePage }: IPaginationProps) => {
  const pagesArray = getPagesArray(totalPages);
  console.log("pagesArray: ", pagesArray);
  console.log("page: ", page);
  const lastPage = pagesArray[pagesArray.length - 1];

  return (
    <div className={classes.Pagination}>
      <p
        className={classes.pageItem}
        onClick={() => changePage(page === 1 ? page : page - 1)}
      >
        &#60;
      </p>
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
      <p
        className={classes.pageItem}
        onClick={() => changePage(page === lastPage ? page : page + 1)}
      >
        &#62;
      </p>
    </div>
  );
};

export default Pagination;
