import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";

export type ISort = "id" | "name" | "username" | "";

interface IInitialState {
  users: IUser[];
  sortedAndSearchedUsers: IUser[];
}

const initialState: IInitialState = {
  users: [],
  sortedAndSearchedUsers: [],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
      state.sortedAndSearchedUsers = action.payload;
    },
    getSortedUsers(state, { payload: sort }: PayloadAction<ISort>) {
      if (sort) {
        state.sortedAndSearchedUsers = [...state.users].sort(
          (a: IUser, b: IUser) => {
            const aValue = a[sort] as string | number;
            const bValue = b[sort] as string | number;

            if (typeof aValue === "number" && typeof bValue === "number") {
              return aValue - bValue;
            } else {
              return aValue.toString().localeCompare(bValue.toString());
            }
          }
        );
      } else {
        state.sortedAndSearchedUsers = state.users;
      }
    },
    getSearchedUsers(state, { payload: searchQuery }: PayloadAction<string>) {
      if (searchQuery) {
        state.sortedAndSearchedUsers = [...state.sortedAndSearchedUsers].filter(
          (user) => user.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else {
        state.sortedAndSearchedUsers = state.users;
      }
    },
  },
});

export const { setUsers, getSortedUsers, getSearchedUsers } = userSlice.actions;
export default userSlice.reducer;
