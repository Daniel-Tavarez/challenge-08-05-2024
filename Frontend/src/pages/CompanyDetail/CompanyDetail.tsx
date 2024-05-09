import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardComponent } from "../../components/CardComponent";
import ClientForm from "../../components/forms/ClientForm";
import { useClientsByCompany } from "../../queries/useClients";
import { useGetCompanyById } from "../../queries/useCompanies";

const CompanyDetail = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const { data: clientsByCompany } = useClientsByCompany(companyId!);
  const { data: company } = useGetCompanyById(companyId!);
  const [editId, setEditId] = useState<string>("");
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
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
        <h1>Clients of {company?.data.name}</h1>
        <button className="button" onClick={() => setEditId('create')}>Create Client</button>
      </div>
      {editId ? (
        <ClientForm
          model={clientsByCompany?.data.find(
            (x) => x.id == Number(editId)
          )}></ClientForm>
      ) : (
        <div className="list">
          {clientsByCompany?.data.map((client) => (
            <CardComponent
              title={`${client.first_name} ${client.last_name}`}
              description={client.email}
              detailRoute="client"
              key={client.id}
              id={String(client.id)}
              editId={setEditId}
              listOther={() => (
                <>
                  <li>
                    <strong>Username: </strong> {client.username}
                  </li>
                  <li>
                    <strong>Phone: </strong> {client.phone}
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

export default CompanyDetail;
