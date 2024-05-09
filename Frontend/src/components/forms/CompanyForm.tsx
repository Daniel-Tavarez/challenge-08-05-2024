// src/components/CompanyForm.js
import React, { FC, useState } from "react";
import { Company } from "../../models/company.model";

interface Props {
  model: Company | undefined;
}

const CompanyForm: FC<Props> = ({ model }) => {
  const [formData, setFormData] = useState({
    name: model?.name ?? "",
    industry: model?.industry ?? "",
    phone_number: model?.phone_number ?? "",
    email: model?.email ?? "",
    website: model?.website ?? "",
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
      <button className="button" type="submit">{model ? "Edit company" : "Create Company"}</button>
    </form>
  );
};

export default CompanyForm;
