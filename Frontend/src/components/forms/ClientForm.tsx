// src/components/ClientForm.js
import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { useCreateClient } from "../../hooks/client/useCreateClient";
import { useUpdateClient } from "../../hooks/client/useUpdateClient";
import { Client } from "../../models/client.model";

interface Props {
  model: Client | undefined;
  onSuccess: () => void;
}

const ClientForm: FC<Props> = ({ model, onSuccess }) => {
  const { companyId } = useParams<{ companyId: string }>();
  const createClient = useCreateClient();
  const updateClient = useUpdateClient();

  const [formData, setFormData] = useState({
    username: model?.username ?? "",
    email: model?.email ?? "",
    first_name: model?.first_name ?? "",
    last_name: model?.last_name ?? "",
    phone: model?.phone ?? "",
    company: Number(companyId),
    id: model?.id ?? "",
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
      await updateClient
        .mutateAsync({ id: String(formData.id), data: formData })
        .then(() => {
          onSuccess();
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      await createClient
        .mutateAsync(formData)
        .then(() => {
          onSuccess();
        })
        .catch((error) => {
          alert(error);
        });
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
        maxLength={10}
      />
      <button className="button" type="submit">
        {model ? "Edit client" : "Create Client"}
      </button>
    </form>
  );
};

export default ClientForm;
