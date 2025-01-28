import axiosInstance from '../axiosInstance';
import { API_ENDPOINT } from '../../utils/constant';

const API_KEY = import.meta.env.API_KEY;

export const fetchHomeData = async () => {
    try {
        const response = await axiosInstance.get(API_ENDPOINT.GET_API, 
            {
                params: {
                    'api-key': API_KEY,
                },
            }
        );
        console.log('response fetching home data:', response);
        return response.data;
    } catch (error) {
        console.error('Error fetching home data:', error);
        return Promise.reject(error);
    }
};