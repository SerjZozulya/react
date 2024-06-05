import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { IProject } from "../../models/IProject"

export const projectsAPI = createApi({
    reducerPath: 'projectApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL + 'api'
    }),
    tagTypes: ['Project'],
    endpoints: (build) => ({
        fetchAllProjects: build.query<IProject[], number>({
            query: () => ({
                url: '/projects',
            }),
            providesTags: result => ['Project'],
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                  const { data } = await queryFulfilled

                } catch (err) {

                }
              },
        }),

        createProject: build.mutation<IProject, IProject>({
            query: (project:IProject) => ({
                url: '/projects',
                method: "POST",
                body: project
            }),
            invalidatesTags: ['Project']
        }),

        deleteProject: build.mutation({
            query: (id) => ({
                url: `/projects/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Project']
        }),

        editProject: build.mutation({
            query: (project) => ({
                url: `/projects/${project.id}`,
                method: "POST",
                body: project
            }),
            invalidatesTags: ['Project']
        }),
    })
})