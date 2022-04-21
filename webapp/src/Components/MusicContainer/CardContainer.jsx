/*
    Author:     Trisha Ghorpade
    NEU ID:     002920687
    Email:      ghorpade.t@northeastern.edu
    Subject:    INFO6150 - Web Design and UX
    Purpose:    Javascript file for the Main App React component
*/

import React from "react"
import './CardContainer.scss';
import Card from "./Card";
import { useSelector } from "react-redux";
import Container from "./Container";

function MusicCardContainer() {
    const { playlists } = useSelector(state => state.musicReducer);
    return (
        <Container>
            <div className={"music-card-container"}>
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
