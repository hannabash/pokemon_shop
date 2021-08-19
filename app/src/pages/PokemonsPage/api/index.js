import api from "../../../api/config";

export const getPokemons = (page) => api.get(`/products?page=${page}&limit=24`);
