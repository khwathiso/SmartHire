import axios from 'axios';


const axiosInstance = axios.create({

    baseURL: 'http://localhost:8000/api', //my backend is hosted local
    headers: {
            'Content-Type': 'application/json',
     },
});

export default axiosInstance;

