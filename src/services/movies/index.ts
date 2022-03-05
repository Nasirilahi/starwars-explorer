import apiClient from '../api';

const moviesApi = {
    fetchMoviesList: async (pageNum: string = '1') => {
            const response = await apiClient().get(`/films/?page=${pageNum}`);
            return response.data;
    }
};

export default moviesApi;