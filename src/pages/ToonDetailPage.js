import React, { useState, useEffect } from 'react';
//import toons from './toons';
import ToonList from '../components/ToonList';
import NotFoundPage from './NotFoundPage';
import VotesSection from '../components/VotesSection';
import AddToonForm from '../components/AddToonForm';

const ToonDetailPage = ({ match }) => {
    // logic goes here
    const id = match.params.id;

    // const person = toons.find(
    //     data => data.id == id
    // );

    const [toonInfo, setToonInfo] = useState({
        votes: 0,
        id: 0,
        firstName: '',
        lastName: ''
    });

    useEffect(() => {

        const fetchData = async () => {
            const result = await fetch(`http://data.vncvr.ca/api/people/${id}`);
            const body = await result.json();
            setToonInfo(body);
        }
        fetchData();

    }, [id]);

    if (!toonInfo) return <NotFoundPage />


    // UI goes here
    return (<React.Fragment>


        <h4 className="text-info">{toonInfo.id}. {toonInfo.firstName} {toonInfo.lastName}</h4>
        <VotesSection id={id} votes={toonInfo.votes} setToonInfo={setToonInfo} />
        <table style={{ "width": "90%", "margin": "auto" }}>
            <tbody>
                <tr>
                    <td style={{ "width": "15%", "verticalAlign": "top" }}>
                        <img className="rounded img-responsive pull-right img-thumbnail float-left"
                            style={{ "width": "50%" }}
                            src={`${toonInfo.pictureUrl}`} alt={`${toonInfo.firstName} ${toonInfo.lastName}`} />
                    </td>
                    <td style={{ "width": "65%", "verticalAlign": "top" }}>
                        <p><b>Occupation: </b>{toonInfo.occupation}</p>
                        <p><b>Gender: </b>{toonInfo.gender}</p>
                    </td>
                    <td style={{ "width": "20%", "verticalAlign": "top" }}>
                        <h3>Others:</h3>
                        <ToonList exceptId={toonInfo.id} />
                    </td>
                </tr>
            </tbody>
        </table>

        <AddToonForm setToonInfo={setToonInfo} />
    </React.Fragment>
    );
}
export default ToonDetailPage;