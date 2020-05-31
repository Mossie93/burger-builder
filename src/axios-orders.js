import axios from 'axios';

const axiosOrders = axios.create();
axiosOrders.defaults.baseURL = "FIREBASE_URL";

export default axiosOrders;