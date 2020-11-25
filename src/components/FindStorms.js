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

          // let [info, setInfo] = useState([]);

    // // const wa = info.map(name => name.name)
    // // console.log(wa);

    // useEffect(async () => {
    //     getPeople(1, [])
    // }, [])

    // async function getPeople(page, results) {
    //     let res = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
    //     results = [...results, ...res.data.results]
    //     if (res.data.results.length == 10) {
    //         getPeople(++page, results);
    //     } else {
    //         setInfo(results)
    //     }
    // }

    // const displayStarWarsChar = () => {
    //     return info.map(character => character.name)
    // }

        <div>
            Find Storms to Extract Electricity
            <Map eventData = {eventData} />
        </div>
    );
};

export default FindStorms;