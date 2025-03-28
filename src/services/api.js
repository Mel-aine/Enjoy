import axios from 'axios'

const API_URL = 'http://127.0.0.1:3333' // URL de ton backend AdonisJS

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
