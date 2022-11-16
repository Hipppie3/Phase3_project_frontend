import Country from "./Country";

function CountryList({ countries }) {
  const countryComponents = countries.map((country) => {
    return <Country key={country.id} id={country.id} name={country.name} />;
  });

  return (
    <div className="list">
      <h3>Countries:</h3>
      <ul className="list">{countryComponents}</ul>
    </div>
  );
}

export default CountryList;
