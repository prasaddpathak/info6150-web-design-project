/*
    Author:     Web of lies
    Subject:    INFO6150 - Web Design and UX
    Purpose:    Javascript file to display each Music component with Image, Name, Music Author 
*/

import React, { useEffect, useState } from 'react';
import './Card.scss';
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { useDispatch } from "react-redux";
import { increaseTimesPlayed, setCurrentPlaying } from "../../../Store/Actions/music-actions.js";
import SongName from "../SongNames/SongName";
import { Skeleton } from "@material-ui/lab";
import Box from "@material-ui/core/Box";
import first from '../../MusicImg/musicpicture.jpg';
import { Link } from 'react-router-dom';

function MusicCard(props) {
    const { name, img, author_name } = props.music;

    const [isHovered, setHovered] = useState(false);

    function handleResponse() {
        setHovered(!isHovered);
    }

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true)
    }, []);

    const dispatch = useDispatch();

    function handlePlay() {
        dispatch(setCurrentPlaying(props.music))
        dispatch(increaseTimesPlayed(props.music.id));
    }



    return (
        <div className={"music-card"}>
            {
                !loaded ?
                    <div className={"Skeleton-top"}>
                        <Skeleton variant="rect" width={210} height={210} />
                        <Box pt={0.5}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </div>
                    :
                    <>
                        <div onClick={handlePlay} className={"music-card-cover"} onMouseOver={handleResponse}>
                            <img src={first} alt={name} />
                            <div hr className="play-circle">
                                <a href="/home/playMusic"> <PlayCircleFilledWhiteIcon /></a>
                            </div>
                        </div>
                        <React.Fragment>
                            <SongName name={name} className={"song-name"} length={name.length} />
                            <SongName name={author_name} className={"author-name"} length={author_name.length} />
                        </React.Fragment>
                    </>
            }


        </div >
    );
}

export default MusicCard;