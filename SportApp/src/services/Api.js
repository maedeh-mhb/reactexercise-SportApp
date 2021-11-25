import axios from 'axios';

const BASE_URL="https://619cdc7f68ebaa001753cd12.mockapi.io";
const getApi=async()=>{
    const response=await axios.get(`${BASE_URL}/products`);
    return response.data;
}
export {getApi};