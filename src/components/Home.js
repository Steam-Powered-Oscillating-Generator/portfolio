import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Home = () => {

    let [info, setInfo] = useState([]);

    // const wa = info.map(name => name.name)
    // console.log(wa);

    useEffect(async () => {
        getPeople(1, [])
    }, [])

    async function getPeople(page, results) {
        let res = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
        results = [...results, ...res.data.results]
        if (res.data.results.length == 10) {
            getPeople(++page, results);
        } else {
            setInfo(results)
        }
    }

    const displayStarWarsChar = () => {
        return info.map(character => character.name)
    }

    return (
        <div>
            <nav>

            </nav>
        </div>
    );
};

export default Home;


