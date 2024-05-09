import { useMutation } from 'react-query';
import { createAddress } from '../../services/addressService';

export const useCreateAddress = () => {
  return useMutation(createAddress);
};
