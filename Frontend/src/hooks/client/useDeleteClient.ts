import { useMutation } from 'react-query';
import { deleteClient } from '../../services/clientService';

export const useDeleteClient = () => {
  return useMutation(deleteClient);
};
