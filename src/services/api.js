import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL



//Services Service Api start
export const getServices = () => {
  return axios.get(`${API_URL}/services`)
}

export const getServiceById = (id) => {
  return axios.get(`${API_URL}/services/${id}`)
}

export const createService = (serviceData) => {
  return axios.post(`${API_URL}/services`, serviceData)
}

export const updateService = (id, serviceData) => {
  return axios.put(`${API_URL}/services/${id}`, serviceData)
}

export const deleteService = (id) => {
  return axios.delete(`${API_URL}/services/${id}`)
}
//Services Service Api end


//Categories Service Api start
export const getCategories  = () => {
  return axios.get(`${API_URL}/category`)
}
//Categories Service Api end
