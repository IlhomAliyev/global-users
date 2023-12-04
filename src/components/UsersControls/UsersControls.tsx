import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useLazyGetAllUsersQuery } from "../../store/API/usersApi";
import {
  ISort,
  getSearchedUsers,
  getSortedUsers,
  setUsers,
} from "../../store/userSlice";
import { getPageCount } from "../../utils/pages";
import { Loader } from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import { AppInput } from "../UI/AppInput/AppInput";
import { AppSelect } from "../UI/AppSelect/AppSelect";
import classes from "./UsersControls.module.scss";

const limitOptions = [
  { value: 3, name: "3" },
  { value: 5, name: "5" },
  { value: 7, name: "7" },
  { value: -1, name: "Показать все" },
];

const sortOptions = [
  { value: "id", name: "ID" },
  { value: "name", name: "Имя" },
  { value: "website", name: "Веб-сайт" },
];

export const UserControls = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");
  const [limit, setLimit] = useState("3");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  console.log('totalPages: ', totalPages)

  const dispatch = useDispatch();
  const { sortedAndSearchedUsers } = useTypedSelector(
    (state) => state.userSlice
  );
  const [fetchTrigget, { data, isLoading, isError }] =
    useLazyGetAllUsersQuery();

  useEffect(() => {
    fetchTrigget({ limit, page });
  }, [limit, page, fetchTrigget]);

  useEffect(() => {
    if (data) {
      dispatch(setUsers(data.response));
      setTotalPages(getPageCount(data.totalCount, limit));
    }
  }, [data, limit, dispatch]);

  useEffect(() => {
    dispatch(getSortedUsers(sort as ISort));
  }, [sort, dispatch]);

  useEffect(() => {
    dispatch(getSearchedUsers(searchQuery));
  }, [searchQuery, dispatch]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <div className={classes.UserControls}>
        <AppInput
          type="text"
          placeholder="Поиск по имени..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          resultCount={sortedAndSearchedUsers.length}
        />
        <AppSelect
          value={sort}
          onChange={(selectedSort) => setSort(selectedSort)}
          defaultValue="Сортировка по ..."
          options={sortOptions}
        />
        <AppSelect
          value={limit}
          onChange={(selectedLimit) => setLimit(selectedLimit)}
          defaultValue="Кол-во пользователей:"
          options={limitOptions}
        />
      </div>
      {totalPages !== 0 && (
        <Pagination page={page} changePage={setPage} totalPages={totalPages} />
      )}
      {isError && (
        <h2 className="error-message">Не удалось загрузить пользователей :(</h2>
      )}
    </>
  );
};
