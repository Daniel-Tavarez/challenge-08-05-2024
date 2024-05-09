// src/components/CompanyForm.js
import React, { FC, useState } from "react";
import { useCreateCompany } from "../../hooks/company/useCreateCompany";
import { useUpdateCompany } from "../../hooks/company/useUpdateCompany";
import { Company } from "../../models/company.model";

interface Props {
  model: Company | undefined;
  onSuccess: () => void;
}

const CompanyForm: FC<Props> = ({ model, onSuccess }) => {
  const createCompany = useCreateCompany();
  const updateCompany = useUpdateCompany();

  const [formData, setFormData] = useState({
    name: model?.name ?? "",
    industry: model?.industry ?? "",
    phone_number: model?.phone_number ?? "",
    email: model?.email ?? "",
    website: model?.website ?? "",
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
      await updateCompany
        .mutateAsync({id: String(formData.id), data: formData})
        .then(() => {
          onSuccess();
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      await createCompany
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
      <h2>{model ? "Edit company" : "Create Company"}</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Company Name"
      />
      <input
        type="text"
        name="industry"
        value={formData.industry}
        onChange={handleChange}
        placeholder="Industry"
      />
      <input
        type="text"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
        maxLength={10}
        placeholder="Phone Number"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="url"
        name="website"
        value={formData.website}
        onChange={handleChange}
        placeholder="Website URL"
      />
      <button className="button" type="submit">
        {model ? "Edit company" : "Create Company"}
      </button>
    </form>
  );
};

export default CompanyForm;
