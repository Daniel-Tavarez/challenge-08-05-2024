import { useMutation } from "react-query";
import { Company } from "../../models/company.model";
import apiService from "../../services/apiService";

interface UpdateCompanyArgs {
  id: string;
  data: Omit<Company, "id">;
}

const updateCompany = async ({ id, data }: UpdateCompanyArgs) => {
  return await apiService.put(`companies/${id}/`, data);
};

export const useUpdateCompany = () => {
  return useMutation(updateCompany);
};
