import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL


export const getServiceProductByDate = ({ address, start_date, end_date, guest_count }) => {
  // const params = { address, start_date, end_date, guest_count };
  return axios.get(`${API_URL}/service_product_by_date?address=${address}&start_date=${start_date}&end_date=${end_date}&guest_count=${guest_count}`);
};
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

// export const getAllServicesByServiceId = (id) => {
//   return axios.get(`${API_URL}/service_product_by_serviceId/${id}`)
// }

export const getAllServicesByServiceId = (serviceId) => {
  return axios.get(`${API_URL}/service_product_options`,{params: { serviceId }})
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
