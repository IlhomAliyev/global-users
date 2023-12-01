import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../models/IUser";
import { baseUrl } from "../../utils/baseUrl";

type FetchBaseQueryMeta = { request: Request; response?: Response };

interface IGetAllUsersData {
  response: IUser[];
  meta: FetchBaseQueryMeta;
  // arg: unknown;
}

type IGetAllUsersPayload = string;

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<IUser[], IGetAllUsersPayload>({
      query: (limit) => `/users/?_limit=${limit}`,
      transformErrorResponse(response, meta) {
        return {
          response,
          // totalCount: meta?.response?.headers.get("X-Total-Count"),
          meta,
          // arg,
        };
      },
      // transformResponse() {
      //   return {
      //     apiResponse,
      //     meta
      //     // totalCount: meta?.response?.headers.get("X-Total-Count"),
      //   };
      // },
    }),
  }),
});

export const { useLazyGetAllUsersQuery } = usersApi;
