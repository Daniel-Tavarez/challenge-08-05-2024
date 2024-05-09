import Address from "../models/address.model";
import { Client } from "../models/client.model";
import apiService from "./apiService";

const endpoint = "clients/";

export const getAllClients = () => {
  return apiService.get<Client>(endpoint);
};

export const getClientById = (id: string) => {
  return apiService.get<Client>(`${endpoint}${id}`);
};

export const createClient = (data: object) => {
  return apiService.post(endpoint, data);
};

export const updateClient = (id: string, data: object) => {
  return apiService.put(`${endpoint}${id}`, data);
};

export const deleteClient = (id: string) => {
  return apiService.delete(`${endpoint}${id}`);
};

export const getClientsByCompany = (companyId: string) => {
  return apiService.get<Client[]>(`${endpoint}${companyId}/getClientsByCompany`);
};

export const getAddressesByClient = (clientId: string) => {
  return apiService.get<Address[]>(`${endpoint}${clientId}/addresses`);
};
