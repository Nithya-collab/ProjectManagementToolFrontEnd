import axios from "axios"

// export const API_BASE_URL = "projectmanagementtoolbackend-production-86c3.up.railway.app";
export const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({ baseURL: import.meta.env.VITE_BASE_URL, withCredentials: true });

const jwt = localStorage.getItem("jwt")

console.log('jwt',jwt)

api.defaults.headers.common["Authorization"]=`Bearer ${jwt}`
api.defaults.headers.post["Content-Type"]="application/json"

export default api;