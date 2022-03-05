import apiClient from '../api';

const moviesApi = {
    fetchMoviesList: async () => {
            const response = await apiClient().get(`/films/`);
            return response.data;
    }
};

export default moviesApi;