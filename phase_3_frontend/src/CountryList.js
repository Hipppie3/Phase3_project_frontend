import Country from "./Country";

function CountryList({ countries }) {
  const countryComponents = countries.map((country) => {
    return <Country key={country.id} id={country.id} name={country.name} />;
  });

  return (
    <div>
      <h3>Countries:</h3>
      <ul>{countryComponents}</ul>
    </div>
  );
}

export default CountryList;
