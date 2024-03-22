import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/IUser";

interface IInitialState {
  users: IUser[];
  touchedUsers: IUser[];
}

const initialState: IInitialState = {
  users: [],
  touchedUsers: [],
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setUsers(state, { payload }: PayloadAction<IUser[]>) {
      state.users = payload;
    },
    setTouchedUsers(state, { payload }: PayloadAction<IUser[]>) {
      state.touchedUsers = payload;
    },
  },
});

export const { setUsers, setTouchedUsers } = dataSlice.actions;
export default dataSlice.reducer;
