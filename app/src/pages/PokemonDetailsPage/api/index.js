import api from "../../../api/config";

export const getDetails = (id) => api.get(`/products/${id}`);