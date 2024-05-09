import Address from "../models/address.model";
import apiService from "./apiService";

const endpoint = "addresses/";

export const getAllAddresses = () => {
  return apiService.get<Address>(endpoint);
};

export const getAddressById = (id: string) => {
  return apiService.get<Address>(`${endpoint}${id}/`);
};

export const createAddress = (data: object) => {
  return apiService.post(endpoint, data);
};

export const updateAddress = (id: string, data: object) => {
  return apiService.put(`${endpoint}${id}/`, data);
};

export const deleteAddress = (id: string) => {
  return apiService.delete(`${endpoint}${id}/`);
};

export const getAddressesByClientId = (clientId: string) => {
  return apiService.get<Address>(`${endpoint}by-client/${clientId}/`);
};
