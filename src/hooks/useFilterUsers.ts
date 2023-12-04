import { useMemo } from "react";
import { IUser } from "../models/IUser";
import { ISort } from "../store/userSlice";

export const useSortedUsers = (users: IUser[], sort: ISort) => {
  const sortedUsers = useMemo(() => {
    if (sort) {
      return [...users].sort((a: IUser, b: IUser) => {
        const aValue = a[sort] as string | number;
        const bValue = b[sort] as string | number;

        if (typeof aValue === "number" && typeof bValue === "number") {
          return aValue - bValue;
        } else {
          return aValue.toString().localeCompare(bValue.toString());
        }
      });
    }
    return users;
  }, [sort, users]);

  return sortedUsers;
};

export const useFilterUsers = (
  users: IUser[],
  sort: ISort,
  searchQuery: string
) => {
  const sortedUsers = useSortedUsers(users, sort);

  const sortedAndSearchedUsers = useMemo(() => {
    return sortedUsers?.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedUsers]);

  return sortedAndSearchedUsers;
};
