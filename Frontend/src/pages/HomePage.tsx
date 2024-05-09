import { useState } from "react";
import { Link } from "react-router-dom";
import { CardComponent } from "../components/CardComponent";
import CompanyForm from "../components/forms/CompanyForm";
import { useDeleteCompany } from "../hooks/company/useDeleteCompany";
import { useCompanies } from "../queries/useCompanies";

const HomePage = () => {
  const { data: companies, refetch } = useCompanies();
  const [editId, setEditId] = useState<string>("");
  const deleteCompany = useDeleteCompany();

  const onSuccess = async () => {
    await refetch();
    setEditId("");
  };

  const deleteFc = async (id: string) => {
    await deleteCompany.mutateAsync(id).then(async () => {
      await refetch();
    })
  }

  return (
    <div className="home-page">
      <div className="header">
        <button
          className={`${editId ? "button" : "button opacity"}`}
          onClick={() => setEditId("")}>
          Go Back
        </button>
        <h1>Companies</h1>
        <button className="button" onClick={() => setEditId("create")}>
          Create Company
        </button>
      </div>
      {editId ? (
        <CompanyForm
          model={companies?.data.find((x) => x.id == Number(editId))}
          onSuccess={onSuccess}></CompanyForm>
      ) : (
        <div className="list">
          {companies?.data.map((company) => (
            <CardComponent
              editId={setEditId}
              deleteFc={deleteFc}
              key={company.id}
              title={company.name}
              description={company.industry}
              listOther={() => (
                <>
                  <li>
                    <strong>Email: </strong> {company.email}
                  </li>
                  <li>
                    <strong>Phone: </strong> {company.phone_number}
                  </li>
                  <li>
                    <strong>Website: </strong>{" "}
                    <Link to={company.website}>{company.website}</Link>
                  </li>
                </>
              )}
              id={String(company.id)}
              detailRoute="company"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
