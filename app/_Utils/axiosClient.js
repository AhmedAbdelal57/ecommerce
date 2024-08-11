const { default: axios } = require('axios');

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
//const apiUrl = 'https://strapi-ecommercy1.onrender.com/api';
const apiUrl = 'https://fakestoreapi.com';

const axiosClient = axios.create({ 
    baseURL: apiUrl,
    headers:{
        Authorization: `Bearer ${apiKey}`
    }

});

export default axiosClient

