import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppInput } from "../../../UI/AppInput/AppInput";
import { useSearchUsers } from "../../../hooks/useSearchUsers";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { setTouchedUsers } from "../../../store/slices/dataSlice";

export const UsersSearchInput = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const { users } = useTypedSelector((state) => state.dataSlice);

  const searchedUsers = useSearchUsers(users, searchQuery);

  useEffect(() => {
    dispatch(setTouchedUsers(searchedUsers));
  }, [searchQuery]);

  return (
    <AppInput
      type="text"
      placeholder="Поиск по имени..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      resultCount={users.length}
    />
  );
};
