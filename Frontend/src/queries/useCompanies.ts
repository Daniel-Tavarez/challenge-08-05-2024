import { useQuery } from "react-query";
import { getAllCompanies } from "../services/companyService";

export const useCompanies = () => {
  return useQuery("companies", getAllCompanies);
};
