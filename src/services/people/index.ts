import apiClient from '../api';

const peopleApi = {
    fetchPeopleList: async (pageNum: number = 1) => {
            const response = await apiClient().get(`/people/?page=${pageNum}`);
            return response.data;
    }
};

export default peopleApi;