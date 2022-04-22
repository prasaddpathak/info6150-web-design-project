/*
    Author:     Web of lies
    Subject:    INFO6150 - Web Design and UX
    Purpose:    Javascript file to display all music components in Grid format WRT URL
*/

import React, {useState} from "react"
import './CardContainer.scss';
import Card from "./Card";
import { useSelector } from "react-redux";
import Container from "./Container";

function MusicCardContainer() {
    let axios = require('axios');
    const [playlists, setPlaylists] = useState([
        {
            "_id": "",
            "name": "",
            "author_name": "",
            "img": "",
            "lang": "",
            "timesPlayed": 0,
            "type": "",
            "musicName": "",
            "__v": 0
        }
    ]);
    const getPlaylists = () => {
        axios
            .get("http://localhost:9008/music",{
                responseType: 'json'
              })
            .then(function (response) {
                setPlaylists(response.data);
                // console.log(response.data);
            });
    };
    return (
        <Container>
            <div className={"music-card-container"}  onLoad={getPlaylists}>
                {
                    playlists.map(item => (
                        <Card key={item.id} music={item} />
                    ))
                }
            </div>
        </Container>
    );
}

export default MusicCardContainer;
