import { useDispatch } from "react-redux";
import { Pagination } from "../../../UI/Pagination/Pagination";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { setPage } from "../../../store/slices/usersSlice";
import { setTouchedUsers } from "../../../store/slices/dataSlice";
import { useLazyGetAllUsersQuery } from "../../../store/API/usersApi";

export const UserPagination = () => {
  const dispatch = useDispatch();
  const { limit, page, totalPages } = useTypedSelector(
    (state) => state.usersSlice
  );

  const [trigger, { data }] = useLazyGetAllUsersQuery();

  const onPageChange = (page: number) => {
    dispatch(setPage(page));

    trigger({ limit, page });

    if (data) {
      dispatch(setTouchedUsers(data.response));
    }
  };

  if (totalPages < 2) return null;

  return (
    <Pagination page={page} changePage={onPageChange} totalPages={totalPages} />
  );
};
