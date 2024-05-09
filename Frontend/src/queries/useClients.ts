import { useQuery } from 'react-query';
import { getAddressesByClient, getAllClients, getClientById, getClientsByCompany } from '../services/clientService';

export const useClients = () => {
    return useQuery('clients', getAllClients);
};

export const useClientsByCompany = (companyId: string) => {
    return useQuery(['clients', companyId], () => getClientsByCompany(companyId), {
        enabled: !!companyId
    });
};

export const useAddressByClient = (clientId: string) => {
    return useQuery(['clients', clientId], () => getAddressesByClient(clientId), {
        enabled: !!clientId
    });
};

export const useClientById = (clientId: string) => {
    return useQuery(['client', clientId], () => getClientById(clientId), {
        enabled: !!clientId
    });
};
