import apiClient from '../api';

const planetApi = {
    fetchPlanetsList: async () => {
            const response = await apiClient().get(`/planets/`);
            return response.data;
    }
};

export default planetApi;