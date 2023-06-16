import axios from "axios"

// BaseUrl for instance
const  BaseUrl   = `http://192.168.11.100:6002/`
const axiosInstance = axios.create({baseURL:BaseUrl})

export const getLoginSecurity = (payload)=>{
    return axiosInstance.post('/Security/SecAuth',payload)
}
export const getLoginUser = (payload)=>{
    return axiosInstance.post('/visitor/UserAck',payload)
}