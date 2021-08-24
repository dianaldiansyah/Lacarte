import CONFIG from './config';

const API_ENDPOINT = {
  EXPLORE: `${CONFIG.BASE_URL}list`,
  ADD_REVIEW: `${CONFIG.BASE_URL}review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
