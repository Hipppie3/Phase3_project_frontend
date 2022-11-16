import MapLink from "./MapLink";
import CountryList from "./CountryList";

function HomePage({ countries, setCountries, content, setContent }) {
  return (
    <>
      <div className="countryList">
        <CountryList countries={countries} setCountries={setCountries} />
      </div>
      <MapLink content={content} setContent={setContent} />
    </>
  );
}

export default HomePage;
