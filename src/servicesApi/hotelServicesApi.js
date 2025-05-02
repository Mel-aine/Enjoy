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
  return axios.post(`${API_URL}/servicesWithUser`, serviceData)
}

export const updateService = (id, serviceData) => {
  return axios.put(`${API_URL}/services/${id}`, serviceData)
}

export const deleteService = (id) => {
  return axios.delete(`${API_URL}/services/${id}`)
}

export const getServicesCategoryIdBy = (id) => {
  return axios.get(`${API_URL}/servicesByCategory/${id}`)
}

export const getAllServicesByServiceId = (id) => {
  return axios.get(`${API_URL}/service_product_by_serviceId/${id}`)
}

export const getAllServicesByService = () => {
  return axios.get(`${API_URL}/service_product_options`)
}

export const getOptionsByServiceId = (id) => {
  return axios.get(`${API_URL}/option/${id}`)
}
export const getOptionsByService = () => {
  return axios.get(`${API_URL}/option`)
}
export const makeReservation = (reservationData) => {
  return axios.post(`${API_URL}/reservationswithuser`, reservationData)
}

export const makePayment = (paymentData) => {
  return axios.post(`${API_URL}/paymentConfirm`, paymentData)
}
//Services Service Api end




//Categories Service Api start
export const getCategories  = () => {
  return axios.get(`${API_URL}/category`)
}
//Categories Service Api end
