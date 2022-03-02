import apiClient from '../api';

const peopleApi = {
    fetchPeopleList: async () => {
            const response = await apiClient().get(`/people/`);
            return response.data;
    }
};

export default peopleApi;