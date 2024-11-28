import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the types for the API response
interface SummaryResponse {
  summary: string;
}

interface GetSummaryParams {
  articleUrl: string;
}


export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', process.env.NEXT_PUBLIC_RAPID_API_KEY as string);
      headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    // Define the query endpoint and types for parameters and response
    getSummary: builder.query<SummaryResponse, GetSummaryParams>({
      query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
    })
  })
});

// Export the hook for the `getSummary` query
export const { useLazyGetSummaryQuery } = articleApi;
