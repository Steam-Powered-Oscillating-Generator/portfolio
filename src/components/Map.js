import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);
    const markers = eventData.map((eachEvent) => {

        if (eachEvent.categories[0].id === 10) {
            console.log(eachEvent)
            return (
                <LocationMarker
                    lat={eachEvent.geometries[0].coordinates[1]}
                    lng={eachEvent.geometries[0].coordinates[0]}
                    onClick={() =>
                        setLocationInfo({ id: eachEvent.id, title: eachEvent.title })
                    }
                />
            );
        }
        return null;
    });
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    );
};

Map.defaultProps = {
    center: {
        lat: 20.5937,
        lng: 78.9629,
    },

    zoom: 2,
};

export default Map;
