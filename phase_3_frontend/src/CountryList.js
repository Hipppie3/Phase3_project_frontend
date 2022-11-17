import Country from "./Country";

function CountryList({ countries }) {
  const countryComponents = countries.map((country) => {
    return <Country key={country.id} id={country.id} name={country.name} />;
  });

  return (
    <div className="list">
      <h1 className="countriesLabel">Countries:</h1>
      <ul className="listOne">{countryComponents.slice(0, 23)}</ul>
      <ul className="listOne">{countryComponents.slice(24, 47)}</ul>
    </div>
  );
}

export default CountryList;
