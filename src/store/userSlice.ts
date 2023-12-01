import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";

export type ISort = "id" | "name" | "username";

interface IInitialState {
  users: IUser[];
  // totalCount: string;
}

const initialState: IInitialState = {
  users: [],
  // totalCount: "0",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    setSortedUsers(state, { payload: sort }: PayloadAction<ISort>) {
      state.users = [...state.users].sort((a, b) => {
        if (typeof a[sort] === "number" && typeof b[sort] === "number") {
          return a[sort] - b[sort];
        } else {
          return a[sort].toString().localeCompare(b[sort].toString());
        }
      });
    },
    setSearchedUsers(state, { payload: searchQuery }: PayloadAction<string>) {
      state.users = [...state.users].filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
    // setTotalCount(state, action: PayloadAction<string>) {
    //   state.totalCount = action.payload;
    // },
  },
});

export const { setUsers, setSortedUsers, setSearchedUsers } = userSlice.actions;
export default userSlice.reducer;
