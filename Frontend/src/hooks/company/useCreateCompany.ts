import { useMutation } from 'react-query';
import { createCompany } from '../../services/companyService';

export const useCreateCompany = () => {
  return useMutation(createCompany);
};
