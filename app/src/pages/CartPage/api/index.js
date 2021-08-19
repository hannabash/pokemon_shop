import  api from '../../../api/config';

export const getCart = (body) => api.get('/cart', body);
export const addCart = (body) => api.post('/cart/item', body);
export const changeCart = (body) => api.patch('/cart/item', body);
export const deleteCart = (id) => api.delete(`/cart/item/${id}`);