import apiClient from '../api';

const peopleApi = {
    fetchPeopleList: async (pageNum: string = '1') => {
            const response = await apiClient().get(`/people/?page=${pageNum}`);
            return response.data;
    }
};

export default peopleApi;