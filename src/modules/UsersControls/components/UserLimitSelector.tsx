import { useDispatch } from "react-redux";
import { AppSelect } from "../../../UI/AppSelect/AppSelect";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useLazyGetAllUsersQuery } from "../../../store/API/usersApi";
import { setTouchedUsers } from "../../../store/slices/dataSlice";
import { setLimit, setTotalPages } from "../../../store/slices/usersSlice";
import { getPageCount } from "../../../utils/getPageParams";

const limitOptions = [
  { value: "3", name: "3" },
  { value: "5", name: "5" },
  { value: "7", name: "7" },
  { value: "10", name: "Показать все" },
];

export const UserLimitSelector = () => {
  const dispatch = useDispatch();
  const { page, limit } = useTypedSelector((state) => state.usersSlice);
  const [trigger, { data }] = useLazyGetAllUsersQuery();

  const onLimitChange = (limit: string) => {
    dispatch(setLimit(limit));

    trigger({ page, limit });

    if (!data) return;

    dispatch(setTouchedUsers(data.response));
    dispatch(setTotalPages(getPageCount(data.totalCount, limit)));
  };

  return (
    <AppSelect
      value={limit}
      onChange={(limit) => onLimitChange(String(limit))}
      defaultValue="Кол-во пользователей:"
      options={limitOptions}
    />
  );
};
