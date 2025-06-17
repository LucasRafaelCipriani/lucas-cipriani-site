import apiSlice from './apiSlice';

const experienceApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getExperiences: build.query({
      query: () => 'experience',
    }),
  }),
});

export const { useGetExperiencesQuery } = experienceApiSlice;
