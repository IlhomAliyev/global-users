import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppInput } from "../../../UI/AppInput/AppInput";
import { useSearchedUsers } from "../../../hooks/useSearchedUsers";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { setTouchedUsers } from "../../../store/slices/dataSlice";

export const UsersSearchInput = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const { users } = useTypedSelector((state) => state.dataSlice);

  const searchedUsers = useSearchedUsers(users, searchQuery);

  useEffect(() => {
    dispatch(setTouchedUsers(searchedUsers));
  }, [dispatch, searchQuery, searchedUsers]);

  const handleSearchInput = (value: string) => {
    setSearchQuery(value);
    dispatch(setTouchedUsers(searchedUsers));
  };

  return (
    <AppInput
      type="text"
      placeholder="Поиск по имени..."
      value={searchQuery}
      onChange={(e) => handleSearchInput(e.target.value)}
      resultCount={users.length}
    />
  );
};
