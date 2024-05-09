import { Company } from "../models/company.model";
import apiService from "./apiService";

const endpoint = "companies/";

export const getAllCompanies = () => {
  return apiService.get<Company[]>(endpoint);
};

export const getCompanyById = (id: string) => {
  return apiService.get<Company>(`${endpoint}${id}/`);
};

export const createCompany = (data: object) => {
  return apiService.post(endpoint, data);
};

export const updateCompany = (id: string, data: object) => {
  return apiService.put(`${endpoint}${id}/`, data);
};

export const deleteCompany = (id: string) => {
  return apiService.delete(`${endpoint}${id}/`);
};
