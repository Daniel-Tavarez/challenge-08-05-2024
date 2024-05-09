import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardComponent } from "../../components/CardComponent";
import AddressForm from "../../components/forms/AddressForn";
import { useDeleteAddress } from "../../hooks/address/useDeleteAddress";
import { useAddressByClient, useClientById } from "../../queries/useClients";

const ClientDetail = () => {
  const { clientId } = useParams<{ clientId: string }>();
  const { data: addressByClient, refetch } = useAddressByClient(clientId!);
  const { data: client } = useClientById(clientId!);
  const [editId, setEditId] = useState<string>("");
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const onSuccess = async () => {
    await refetch();
    setEditId("");
  };

  const deleteAddress = useDeleteAddress();
  const deleteFc = async (id: string) => {
    await deleteAddress.mutateAsync(id).then(async () => {
      await refetch();
    });
  };

  return (
    <div className="home-page">
      <div className="header">
        <button
          className="button"
          onClick={() => {
            editId ? setEditId("") : handleGoBack();
          }}>
          Go Back
        </button>
        <h1>Client {`${client?.data.first_name} ${client?.data.last_name}`}</h1>
        <button className="button" onClick={() => setEditId("create")}>
          Create Address
        </button>
      </div>
      {editId ? (
        <AddressForm
          model={addressByClient?.data.find((x) => x.id == Number(editId))}
          onSuccess={onSuccess}></AddressForm>
      ) : (
        <div className="list">
          {addressByClient?.data.map((address) => (
            <CardComponent
              deleteFc={deleteFc}
              editId={setEditId}
              title={address.country}
              description={address.city}
              key={address.id}
              id={String(address.id)}
              listOther={() => (
                <>
                  <li>
                    <strong>Street: </strong> {address.street}
                  </li>
                  <li>
                    <strong>State: </strong> {address.state}
                  </li>
                  <li>
                    <strong>Postal Code: </strong> {address.postal_code}
                  </li>
                </>
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientDetail;
