import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  // searchQuery: string;
  limit: string;
  page: number;
  sort: string | number;
  totalPages: number;
}

const initialState: IInitialState = {
  // searchQuery: "",
  sort: "",
  limit: "3",
  page: 1,
  totalPages: 0,
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    // setSearchQuery: (state, { payload }: PayloadAction<string>) => {
    //   state.searchQuery = payload;
    // },
    setSort: (state, { payload }: PayloadAction<string>) => {
      state.sort = payload;
    },
    setLimit: (state, { payload }: PayloadAction<string>) => {
      state.limit = payload;
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setTotalPages: (state, { payload }: PayloadAction<number>) => {
      state.totalPages = payload;
    },
  },
});

export const { setSort, setLimit, setPage, setTotalPages } = usersSlice.actions;
export default usersSlice.reducer;
