import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";

function MapLink({ content, setContent }) {
  return (
    <div className="card">
      <div className="map">
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
}

export default MapLink;
