import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import toons from '../pages/toons';

const ToonList = (exceptId) => {

    //console.log("exceptId= " + exceptId);



    const [toonInfo, setToonInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://data.vncvr.ca/api/people/`);
            const body = await result.json();
            setToonInfo(body);
        }
        fetchData();
    }, []);

        // var others = toons;
    // if (exceptId != undefined) {
    //     others = toons.filter(p => p.id != exceptId.exceptId);
    // }

    var others = toonInfo;
    if (exceptId != undefined) {
        others = Object.values(toonInfo).filter(p => p.id != exceptId.exceptId);
    }

    return (
        <>
            {others.map((person, key) => (
                <Link key={key} to={`/detail/${person.id}`}>
                    <h6>{person.id} {person.firstName} {person.lastName}</h6>
                </Link>
            ))}
        </>
    )
}

export default ToonList;
