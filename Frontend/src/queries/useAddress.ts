import { useQuery } from 'react-query';
import { getAddressesByClientId, getAllAddresses } from '../services/addressService';

export const useAddresses = () => {
    return useQuery('addresses', getAllAddresses);
};

export const useAddressesByClientId = (clientId: string) => {
    return useQuery(['addresses', clientId], () => getAddressesByClientId(clientId), {
        enabled: !!clientId  // Ensure clientId is not null or empty
    });
};
