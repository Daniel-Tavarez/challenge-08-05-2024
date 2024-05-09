// src/components/AddressForm.js
import React, { FC, useState } from "react";
import Address from "../../models/address.model";

interface Props {
  model: Address | undefined;
}

const AddressForm: FC<Props> = ({ model }) => {
  const [formData, setFormData] = useState({
    street: model?.state ?? "",
    city: model?.city ?? "",
    state: model?.state ?? "",
    postal_code: model?.postal_code ?? "",
    country: model?.country ?? "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (model) {
      console.log(formData);
    } else {
      console.log(formData);
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
