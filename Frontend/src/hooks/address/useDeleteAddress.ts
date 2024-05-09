// In src/hooks/useDeleteCompany.ts
import { useMutation } from 'react-query';
import { deleteAddress } from '../../services/addressService';

export const useDeleteAddress = () => {
  return useMutation(deleteAddress);
};
