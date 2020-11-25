import React, {useState, useEffect} from 'react';
import axios from "axios";
import Map from "./Map";

const FindStorms = () => {
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
          let res = await axios.get(
            "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
          );
          setEventData(res.data.events);
        };
        fetchEvents();
      }, []);

    return (
        <div>
            <h1 className='stormsh1'>Find Storms to Extract Electricity</h1>
            <Map eventData = {eventData} />
        </div>
    );
};

export default FindStorms;