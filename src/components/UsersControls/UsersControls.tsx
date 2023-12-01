import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLazyGetAllUsersQuery } from "../../store/API/usersApi";
import {
  ISort,
  setSearchedUsers,
  setSortedUsers,
  setUsers,
} from "../../store/userSlice";
import { Loader } from "../Loader/Loader";
import { AppInput } from "../UI/AppInput/AppInput";
import { AppSelect } from "../UI/AppSelect/AppSelect";
import classes from "./UsersControls.module.scss";

export const UserControls = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("id");
  const [limit, setLimit] = useState("3");

  const dispatch = useDispatch();

  const [fetchTrigger, { data, isLoading, isError }] =
    useLazyGetAllUsersQuery();

  useEffect(() => {
    fetchTrigger(limit);
  }, [fetchTrigger, limit]);

  useEffect(() => {
    if (data) {
      dispatch(setUsers(data));
      console.log("DATA: ", data);
    }
  }, [data, dispatch]);

  useEffect(() => {
    dispatch(setSearchedUsers(searchQuery));
    dispatch(setSortedUsers(sort as ISort));
  }, [sort, searchQuery, dispatch]);

  return (
    <div className={classes.UserControls}>
      {isLoading && <Loader />}
      {isError && (
        <h2 className="error-message">Не удалось загрузить пользователей :(</h2>
      )}
      <AppInput
        type="search"
        placeholder="Поиск по имени..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <AppSelect
        value={sort}
        onChange={(selectedSort) => setSort(selectedSort)}
        defaultValue="Сортировка по..."
        options={[
          { value: "id", name: "ID" },
          { value: "name", name: "Имя" },
          { value: "username", name: "Никнейм" },
        ]}
      />
      <AppSelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Количество пользователей"
        options={[
          { value: 3, name: "3" },
          { value: 5, name: "5" },
          { value: 7, name: "7" },
          { value: '', name: "Показать все" },
        ]}
      />
    </div>
  );
};
