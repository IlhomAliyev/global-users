import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ErrorMessage } from "../../UI/ErrorMessage/ErrorMessage";
import { Loader } from "../../UI/Loader/Loader";
import { AppTable } from "../../UI/Table/AppTable";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useGetAllUsersQuery } from "../../store/API/usersApi";
import { setTouchedUsers, setUsers } from "../../store/slices/dataSlice";
import { setTotalPages } from "../../store/slices/usersSlice";
import { getPageCount } from "../../utils/getPageParams";

export const UsersTable = () => {
  const dispatch = useDispatch();

  const { touchedUsers } = useTypedSelector((state) => state.dataSlice);
  const { limit, page } = useTypedSelector((state) => state.usersSlice);

  const { data, isError, isLoading } = useGetAllUsersQuery({
    limit,
    page,
  });

  useEffect(() => {
    if (!data?.response) return;

    dispatch(setUsers(data.response));
    dispatch(setTouchedUsers(data.response));
    dispatch(setTotalPages(getPageCount(data.totalCount, limit)));
  }, [data?.response, data?.totalCount, dispatch, limit]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <AppTable data={touchedUsers} />
      <ErrorMessage
        message="Не удалось загрузить пользователей :("
        isError={isError}
      />
    </>
  );
};
