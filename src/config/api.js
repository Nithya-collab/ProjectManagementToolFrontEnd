import axios from "axios"

// export const API_BASE_URL="http://localhost:8080"
export const API_BASE_URL="https://projectmanagementtoolbackend-production-86c3.up.railway.app"

const api = axios.create({baseURL:API_BASE_URL})

const jwt = localStorage.getItem("jwt")

console.log('jwt',jwt)

api.defaults.headers.common["Authorization"]=`Bearer ${jwt}`
api.defaults.headers.post["Content-Type"]="application/json"

export default api;