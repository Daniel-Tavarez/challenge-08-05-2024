import { useQuery } from "react-query";
import { getAllCompanies, getCompanyById } from "../services/companyService";

export const useCompanies = () => {
  return useQuery("companies", getAllCompanies);
};

export const useGetCompanyById = (id: string) => {
  return useQuery(["company", id], () => getCompanyById(id), {
    enabled: !!id,
  });
};
