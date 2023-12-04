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
    setUsers(state, { payload }: PayloadAction<IUser[]>) {
      state.users = payload;
    },
    setSortedAndSearchedUsers(state, { payload }: PayloadAction<IUser[]>) {
      state.sortedAndSearchedUsers = payload;
    },
  },
});

export const { setUsers, setSortedAndSearchedUsers } = userSlice.actions;
export default userSlice.reducer;
