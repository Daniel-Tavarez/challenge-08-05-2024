// In src/hooks/useUpdateCompany.ts
import { useMutation } from 'react-query';
import { Client } from '../../models/client.model';
import apiService from '../../services/apiService';

interface UpdateClientArgs {
  id: string;
  data: Omit<Client, "id">;
}

const updateClient = async ({ id, data }: UpdateClientArgs) => {
  return await apiService.put(`clients/${id}/`, data);
};

export const useUpdateClient = () => {
  return useMutation(updateClient);
};