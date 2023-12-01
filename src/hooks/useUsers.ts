import { useMemo } from "react";
import { IUser } from "../models/IUser";
import { ISort } from "../store/userSlice";

export const useSortedUsers = (users: IUser[], sort: ISort) => {
  const sortedUsers = useMemo(() => {
    if (sort) {
      return [...users].sort((a, b) =>
        a[sort].toString().localeCompare(b[sort].toString())
      );
    }
    return users;
  }, [sort, users]);

  return sortedUsers;
};

export const useUsers = (users: IUser[], sort: ISort, searchQuery: string) => {
  const sortedUsers = useSortedUsers(users, sort);

  const sortedAndSearchedUsers = useMemo(() => {
    return sortedUsers?.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedUsers]);

  return sortedAndSearchedUsers;
};
