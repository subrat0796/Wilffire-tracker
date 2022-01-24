import GoogleMapReact from "google-map-react";
import LocationMarkers from "../LocationMarker/LocationMarker";
import LocationInfoBox from "../LocationInfoBox/LocationInfoBox";
import { useState } from "react";
import Header from "../Header/Header";

function Map({ eventData, center, zoom }) {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((event) => {
    if (event.categories[0].id === 8) {
      return <LocationMarkers lat={event.geometries[0].coordinates[1]} lng={event.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: event.id, title: event.title })} />;
    }

    return null;
  });
  return (
    <div className="map">
      <Header />
      <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyBAKdaOEPJyvzVR3N7CeJvzK8WFOkIgaT8" }} defaultZoom={zoom} defaultCenter={center}>
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
