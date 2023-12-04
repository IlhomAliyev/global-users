import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../models/IUser";
import { baseUrl } from "../../utils/baseUrl";

interface IGetAllUsersData {
  response: IUser[];
  totalCount: number;
}

interface IGetAllUsersPayload {
  limit: string;
  page: number;
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<IGetAllUsersData, IGetAllUsersPayload>({
      query: ({ limit, page }) => `/users/?_limit=${limit}&_page=${page}`,
      transformResponse: (response: IUser[], meta) => {
        const totalCount = Number(meta?.response?.headers.get("X-Total-Count"));
        return { response, totalCount };
      },
    }),
  }),
});

export const { useLazyGetAllUsersQuery } = usersApi;
