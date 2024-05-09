import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { useCreateAddress } from "../../hooks/address/useCreateAddress";
import { useUpdateAddress } from "../../hooks/address/useUpdateAddress";
import Address from "../../models/address.model";

interface Props {
  model: Address | undefined;
  onSuccess: () => void;
}

const AddressForm: FC<Props> = ({ model, onSuccess }) => {
  const { clientId } = useParams<{ clientId: string }>();
  const createAddress = useCreateAddress();
  const updateAddress = useUpdateAddress();

  const [formData, setFormData] = useState({
    street: model?.state ?? "",
    city: model?.city ?? "",
    state: model?.state ?? "",
    postal_code: model?.postal_code ?? "",
    country: model?.country ?? "",
    client: clientId,
    id: model?.id ?? ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (model) {
      
      await updateAddress
        .mutateAsync({id: String(formData.id), data: formData})
        .then(() => {
          onSuccess();
        })
        .catch((error) => {
          alert(error.response.data as string);
        });
    } else {
      await createAddress
        .mutateAsync(formData)
        .then(() => {
          onSuccess();
        })
        .catch((error) => {
          alert(error.response.data as string);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>{model ? "Edit Address" : "Create Address"}</h2>
      <input
        type="text"
        name="street"
        value={formData.street}
        onChange={handleChange}
        placeholder="Street"
      />
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
      />
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="State"
      />
      <input
        type="text"
        name="postal_code"
        value={formData.postal_code}
        onChange={handleChange}
        placeholder="Postal Code"
      />
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={handleChange}
        placeholder="Country"
      />
      <button className="button" type="submit">{model ? "Edit Address" : "Create Address"}</button>
    </form>
  );
};

export default AddressForm;
