import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../types/IUser";

interface IGetAllUsersResponse {
  response: IUser[];
  totalCount: number;
}

interface IGetAllUsersPayload {
  limit?: string;
  page?: number;
}

const baseUrl = import.meta.env.VITE_BASE_URL;

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<IGetAllUsersResponse, IGetAllUsersPayload>({
      query: ({ limit, page }: IGetAllUsersPayload) => ({
        url: `/users/`,
        params: {
          _limit: limit,
          _page: page,
        },
      }),
      transformResponse: (response: IUser[], meta): IGetAllUsersResponse => {
        const totalCount = Number(meta?.response?.headers.get("X-Total-Count"));
        return { response, totalCount };
      },
    }),
  }),
});

export const { useLazyGetAllUsersQuery, useGetAllUsersQuery } = usersApi;
