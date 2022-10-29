import axios from "axios";
import { getToken } from "../fwd-motors/auth.js";

const getProductParams = (id) => new Promise((resolve, reject) => {
    const token = getToken();
    axios.get(`http://openapi.forward-motors.com/api/2.0/parts/info?id=${id}&includeImages=true`, {
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => resolve({id, data: res.data})).catch(e => reject(e));
})

export const articulAdapter = async (data) => {
    const productsIds = [];
    
    data.forEach(({offers}) => offers.forEach(product => {
        productsIds.push(product.goodId)}));

    const params = await Promise.allSettled(productsIds.map(id => {
        getProductParams(id)}));
    const allProducts = [];

    data.forEach(({offers}) => {
        const products = offers.map(product => {
            const currParam = params.find(({value: {id}}) => {
                id === product.goodId
                console.log(id,product.goodId);
            });
            return {...product, ...currParam.value.data};
        });
        allProducts.push(...products);
    });
    return allProducts;
}