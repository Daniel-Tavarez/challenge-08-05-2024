import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  description: string;
  id: string;
  detailRoute?: string;
  listOther: () => ReactNode;
  editId: React.Dispatch<React.SetStateAction<string>>;
  deleteFc: (id: string) => void;
}

export const CardComponent: FC<Props> = ({
  description,
  id,
  title,
  detailRoute,
  listOther,
  editId,
  deleteFc
}) => {
  return (
    <div className="card-component">
      <button className="delete" onClick={() => deleteFc(id)}>
        <DeleteIcon></DeleteIcon>
      </button>
      <button className="edit" onClick={() => editId(id)}>
        <EditIcon></EditIcon>
      </button>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <ul>{listOther()}</ul>
      {detailRoute && (
        <Link className="button" to={`${detailRoute}/${id}`}>
          Go to detail
        </Link>
      )}
    </div>
  );
};
