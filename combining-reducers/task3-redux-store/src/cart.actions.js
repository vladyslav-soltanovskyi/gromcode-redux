export const ADD_PRODUCT =  'CART/ADD_PRODUCT';
export const REMOVE_PRODUCT =  'CART/REMOVE_PRODUCT';

export const addProduct = (dataProduct) => ({ type: ADD_PRODUCT, payload: { dataProduct } });
export const removeProduct = (productId) => ({ type: DELETE_PRODUCT, payload: { productId } });