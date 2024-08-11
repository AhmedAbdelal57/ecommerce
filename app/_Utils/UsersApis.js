const { default: axiosClient } = require("./axiosClient");

//const getLeatestProduct = ()=> axiosClient.get('/products?populate=*');
const getAllusers = ()=> axiosClient.get('/users');
//const getProductById = (id)=>axiosClient.get(`/products/${id}?populate=*`);
const getUserById = (id)=>axiosClient.get(`/users/${id}`);
//const getProductByCategory = (category)=>axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)
//const getProductByCategory = (category)=>axiosClient.get(`/products/category/${category}`)

//const addToCart = (userId)=> axiosClient.get(`/carts?userId=/${userId}`);

export default {
    getAllusers,
    getUserById,
}