import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppSelect } from "../../../UI/AppSelect/AppSelect";
import { useSortedUsers } from "../../../hooks/useSortUsers";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { setTouchedUsers } from "../../../store/slices/dataSlice";
import { setSort } from "../../../store/slices/usersSlice";

const sortOptions = [
  { value: "id", name: "ID" },
  { value: "name", name: "Имя" },
  { value: "website", name: "Веб-сайт" },
];

export const UserSortSelector = () => {
  const dispatch = useDispatch();

  const { sort } = useTypedSelector((state) => state.usersSlice);
  const { users } = useTypedSelector((state) => state.dataSlice);

  const sortedUsers = useSortedUsers(users, sort);

  useEffect(() => {
    dispatch(setTouchedUsers(sortedUsers));
  }, [dispatch, sort, sortedUsers]);

  return (
    <AppSelect
      value={sort}
      onChange={(sort) => dispatch(setSort(String(sort)))}
      defaultValue="Сортировка по ..."
      options={sortOptions}
    />
  );
};
