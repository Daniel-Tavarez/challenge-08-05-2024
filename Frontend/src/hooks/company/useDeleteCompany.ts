import { useMutation } from 'react-query';
import { deleteCompany } from '../../services/companyService';

export const useDeleteCompany = () => {
  return useMutation(deleteCompany);
};
