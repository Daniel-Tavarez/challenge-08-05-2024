// src/components/ClientForm.js
import React, { FC, useState } from "react";
import { Client } from "../../models/client.model";

interface Props {
  model: Client | undefined;
}

const ClientForm: FC<Props> = ({ model }) => {
  const [formData, setFormData] = useState({
    username: model?.username ?? "",
    email: model?.email ?? "",
    first_name: model?.first_name ?? "",
    last_name: model?.last_name ?? "",
    phone: model?.phone ?? "",
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
      <h2>{model ? "Edit client" : "Create Client"}</h2>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <button className="button" type="submit">
        {model ? "Edit client" : "Create Client"}
      </button>
    </form>
  );
};

export default ClientForm;
