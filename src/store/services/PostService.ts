import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PostInterface } from '../models/PostInterface';

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        fetchPosts: builder.query<PostInterface[], number>({
            query: (number = 5) => ({
                url: '/posts',
                params: {
                    _limit: number,
                },
            }),
            providesTags: result => ['Post'],
        }),
        createPost: builder.mutation<PostInterface, PostInterface>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post,
            }),
            invalidatesTags: ['Post'],
        }),
        updatePost: builder.mutation<PostInterface, PostInterface>({
            query: (post) => ({
                url: '/posts/' + post.id,
                method: 'PUT',
                body: post,
            }),
            invalidatesTags: ['Post'],
        }),
        removePost: builder.mutation<PostInterface, PostInterface>({
            query: (post) => ({
                url: '/posts/' + post.id,
                method: 'DELETE',
                body: post,
            }),
            invalidatesTags: ['Post'],
        }),
    }),
});
