import { API } from './axios';


export const getHome = async () => {
    const { data } = await API.get('api/v1/HomeApi/home', {
       headers: {
          Authorization: "",
       },
    });

    return data;
 };