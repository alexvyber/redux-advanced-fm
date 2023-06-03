import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const itemApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: builder => ({
    getItems: builder.query<{items: Item[]}, void>({
      query: () => "items",
    }),
  }),
})

export const { useGetItemsQuery } = itemApi
