import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";
import CountryList from "./CountryList";

function HomePage({ countries, setCountries, content, setContent }) {
  return (
    <>
      <div className="countryList">
        <CountryList countries={countries} setCountries={setCountries} />
      </div>
      <div className="card">
        <div className="map">
          <MapChart setTooltipContent={setContent} />
          <ReactTooltip>{content}</ReactTooltip>
        </div>
      </div>
    </>
  );
}

export default HomePage;
