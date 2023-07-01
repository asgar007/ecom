
import axios from 'axios';

const usersUrl = 'http://localhost:3002/products';


export const getProduct = async (id) => {
    console.log("inside product");
    id = id || '';
    try {
        return await axios.get(`${usersUrl}/${id}`);
    } catch (error) {
        console.log('Error while calling getUsers api ', error);
    }
}

export const getProducts = async () => {
    try {
        return await axios.get(usersUrl);
    } catch (error) {
        console.log('Error while calling getProducts api ', error);
    }
}

export const addProduct = async (product) => {
    return await axios.post(`${usersUrl}`, product);
}

// export const deleteUser = async (id) => {
//     return await axios.delete(`${usersUrl}/${id}`);
// }

export const editProduct = async (id, product) => {
    console.log("inside edit");
    return await axios.put(`${usersUrl}/${id}`, product)
}