const { default: axiosClient } = require("./axiosClient");

//const getLeatestProduct = ()=> axiosClient.get('/products?populate=*');
const getLeatestProduct = ()=> axiosClient.get('/products');
//const getProductById = (id)=>axiosClient.get(`/products/${id}?populate=*`);
const getProductById = (id)=>axiosClient.get(`/products/${id}`);
//const getProductByCategory = (category)=>axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)
const getProductByCategory = (category)=>axiosClient.get(`/products/category/${category}`)

const addToCart = (userId)=> axiosClient.get(`/carts/user/${userId}`);

export default {
    getLeatestProduct,
    getProductById,
    getProductByCategory,
    addToCart,
}