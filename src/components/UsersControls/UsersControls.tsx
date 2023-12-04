import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFilterUsers } from "../../hooks/useFilterUsers";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useLazyGetAllUsersQuery } from "../../store/API/usersApi";
import {
  ISort,
  setSortedAndSearchedUsers,
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
  { value: 10, name: "Показать все" },
];

const sortOptions = [
  { value: "id", name: "ID" },
  { value: "name", name: "Имя" },
  { value: "website", name: "Веб-сайт" },
];

export const UserControls = () => {
  const [filter, setFilter] = useState({ sort: "", searchQuery: "" });
  const [limit, setLimit] = useState("3");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const dispatch = useDispatch();

  const { users } = useTypedSelector((state) => state.userSlice);

  const [fetchTrigger, { data, isLoading, isError }] =
    useLazyGetAllUsersQuery();

  const filteredUsers = useFilterUsers(
    users,
    filter.sort as ISort,
    filter.searchQuery
  );

  useEffect(() => {
    fetchTrigger({ limit, page });
  }, [limit, page, fetchTrigger]);

  useEffect(() => {
    if (data) {
      dispatch(setUsers(data.response));
      setTotalPages(getPageCount(data.totalCount, limit));
    }
  }, [data, limit, dispatch]);

  useEffect(() => {
    dispatch(setSortedAndSearchedUsers(filteredUsers));
  }, [filteredUsers, dispatch]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <div className={classes.UserControls}>
        <AppInput
          type="text"
          placeholder="Поиск по имени..."
          value={filter.searchQuery}
          onChange={(e) =>
            setFilter({ ...filter, searchQuery: e.target.value })
          }
          resultCount={filteredUsers.length}
        />
        <AppSelect
          value={filter.sort}
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
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
      {totalPages > 1 && (
        <Pagination page={page} changePage={setPage} totalPages={totalPages} />
      )}
      {isError && (
        <h2 className="error-message">Не удалось загрузить пользователей :(</h2>
      )}
    </>
  );
};
