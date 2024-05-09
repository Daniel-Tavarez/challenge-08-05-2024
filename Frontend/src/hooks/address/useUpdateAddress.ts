// In src/hooks/useUpdateCompany.ts
import { useMutation } from "react-query";
import Address from "../../models/address.model";
import apiService from "../../services/apiService";

interface UpdateAddressArgs {
  id: string;
  data: Omit<Address, "id">;
}

const updateAddress = async ({ id, data }: UpdateAddressArgs) => {
  return await apiService.put(`addresses/${id}/`, data);
};

export const useUpdateAddress = () => {
  return useMutation(updateAddress);
};
