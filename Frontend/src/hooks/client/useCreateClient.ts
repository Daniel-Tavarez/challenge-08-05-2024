import { useMutation } from 'react-query';
import { createClient } from '../../services/clientService';

export const useCreateClient = () => {
  return useMutation(createClient);
};
