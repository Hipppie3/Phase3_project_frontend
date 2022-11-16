import Country from "./Country";

function CountryList({ countries }) {
  const countryComponents = countries.map((country) => {
    return <Country key={country.id} id={country.id} name={country.name} />;
  });

  return (
    <div className="list">
      <h1 className="countriesLabel">Countries:</h1>
      <ul className="listOne">
        {countryComponents[0]}
        {countryComponents[1]}
        {countryComponents[2]}
        {countryComponents[3]}
        {countryComponents[4]}
        {countryComponents[5]}
        {countryComponents[6]}
        {countryComponents[7]}
        {countryComponents[8]}
        {countryComponents[9]}
        {countryComponents[10]}
        {countryComponents[11]}
        {countryComponents[12]}
        {countryComponents[13]}
        {countryComponents[14]}
        {countryComponents[15]}
        {countryComponents[16]}
        {countryComponents[17]}
        {countryComponents[18]}
        {countryComponents[19]}
        {countryComponents[20]}
        {countryComponents[21]}
        {countryComponents[22]}
        {countryComponents[23]}
      </ul>
      <ul className="listOne">
        {countryComponents[24]}
        {countryComponents[25]}
        {countryComponents[26]}
        {countryComponents[27]}
        {countryComponents[28]}
        {countryComponents[29]}
        {countryComponents[30]}
        {countryComponents[31]}
        {countryComponents[32]}
        {countryComponents[33]}
        {countryComponents[34]}
        {countryComponents[35]}
        {countryComponents[36]}
        {countryComponents[37]}
        {countryComponents[38]}
        {countryComponents[39]}
        {countryComponents[40]}
        {countryComponents[41]}
        {countryComponents[42]}
        {countryComponents[43]}
        {countryComponents[44]}
        {countryComponents[45]}
        {countryComponents[46]}
        {countryComponents[47]}
      </ul>
    </div>
  );
}

export default CountryList;
