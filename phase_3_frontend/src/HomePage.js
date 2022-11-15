import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";
import CountryList from "./CountryList";

function HomePage({ foods, setFoods, content, setContent }) {
  return (
    <>
      <div className="countryList">
        <CountryList foods={foods} setFoods={setFoods} />
      </div>
      <div className="map">
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </>
  );
}

export default HomePage;
