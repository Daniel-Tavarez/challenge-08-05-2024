// src/queries/useClients.ts
import { useQuery } from 'react-query';
import { getAllClients, getClientsByCompany } from '../services/clientService';

export const useClients = () => {
    return useQuery('clients', getAllClients);
};

export const useClientsByCompany = (companyId: string) => {
    return useQuery(['clients', companyId], () => getClientsByCompany(companyId), {
        enabled: !!companyId  // Ensure companyId is not null or empty
    });
};
