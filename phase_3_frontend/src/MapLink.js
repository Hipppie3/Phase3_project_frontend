import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";

function MapLink({ content, setContent, countries }) {
  return (
    <div className="card">
      <div className="map">
        <MapChart setTooltipContent={setContent} countries={countries} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
}

export default MapLink;
