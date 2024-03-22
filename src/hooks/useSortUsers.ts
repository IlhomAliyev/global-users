import { useMemo } from "react";
import { IUser } from "../types/IUser";

export const useSortedUsers = (users: IUser[], sort: string | number) => {
  return useMemo(() => {
    if (sort) {
      return [...users].sort((a: IUser, b: IUser) => {
        const aValue = a[sort];
        const bValue = b[sort];

        if (typeof aValue === "number" && typeof bValue === "number") {
          return aValue - bValue;
        } else {
          return aValue.toString().localeCompare(bValue.toString());
        }
      });
    }

    return users;
  }, [sort, users]);
};
