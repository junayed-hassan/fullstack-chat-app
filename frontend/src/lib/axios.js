import axios from 'axios';  //Importing library

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? 'http://localhost:5005/api': "/api", // Setting the default URL for each request.
    withCredentials: true,  // To send cookies or credentials during the request.
});