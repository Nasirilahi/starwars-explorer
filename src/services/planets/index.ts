import apiClient from '../api';

const planetApi = {
    fetchPlanetsList: async (pageNum: string = '1') => {
            const response = await apiClient().get(`/planets/?page=${pageNum}`);
            return response.data;
    }
};

export default planetApi;