import { v4 as uuidv4 } from "uuid";
import { getPagesArray } from "../../utils/getPageParams";
import { AppButton } from "../AppButton/AppButton";
import styles from "./Pagination.module.scss";

interface IPaginationProps {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
}

export const Pagination = ({
  totalPages,
  page,
  changePage,
}: IPaginationProps) => {
  const pagesArray = getPagesArray(totalPages);
  const lastPage = pagesArray[pagesArray.length - 1];

  return (
    <div className={styles.Pagination}>
      <AppButton
        buttonLabel="<"
        onClick={() => changePage(page === 1 ? page : page - 1)}
        disabled={page === 1}
      />
      {pagesArray.map((p) => (
        <AppButton
          key={uuidv4()}
          onClick={() => changePage(p)}
          buttonLabel={String(p)}
          className={page === p ? `${styles.currentPage}` : ""}
        />
      ))}
      <AppButton
        buttonLabel=">"
        onClick={() => changePage(page === lastPage ? page : page + 1)}
        disabled={page === lastPage}
      />
    </div>
  );
};
