import { Link } from "react-router-dom";

function Country({ name, id }) {
  return (
    <Link to={`/Country/${id}`} className="countryLink">
      <div>
        <tr className="country">{name}</tr>
      </div>
    </Link>
  );
}

export default Country;
