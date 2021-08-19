import api from '../../../api/config';

export const signup = (body) => api.post('/auth/signup', body);