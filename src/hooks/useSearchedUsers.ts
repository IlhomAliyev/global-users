import { useMemo } from "react";
import { IUser } from "../types/IUser";

export const useSearchedUsers = (users: IUser[], searchQuery: string) => {
  return useMemo(() => {
    return users?.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, users]);
};
