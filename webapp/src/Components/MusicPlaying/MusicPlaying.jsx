import React from 'react'
// import Song from '../../Assets/Audio/song.mp3';
//import songImg from '../Assets/musicpicture.jpg';
import { Link } from 'react-router-dom';
import './MusicPlaying.scss'
// import song from '../../Assets/Audio/Song_Music/song.mp3'
import disc from '../../Assets/Img/songDisk.png'
import { lightTheme, darkTheme } from "../../Utils/js/theme";
//class musicplaying component defined

class MusicPlaying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            song: '',
            songImg: ''
        }
    }
    componentDidMount() {

        let currentTheme = sessionStorage.getItem('theme')
        const theme = currentTheme === "light" ? lightTheme : darkTheme;
        console.log("main", theme)
        // sessionStorage.setItem('theme', currentTheme)
        Object.keys(theme).forEach((key) => {
            const value = theme[key];
            document.documentElement.style.setProperty(key, value);
        });
        let songName = sessionStorage.getItem('songName')
        let song = require(`../../Assets/Audio/Song_Music/${songName}.mp3`)
        let songImg = require(`../../Assets/Img/${songName}.jpg`)
        this.setState({ song: song, songImg: songImg })

    }

    startSong = () => {
        this.setState({ start: true })
    }
    pauseSong = () => {
        this.setState({ start: false })
    }

    render() {
        return (
            <React.Fragment>
                <div className='musicMain'>
                    <div className='row'>
                        <div className='internetRadio col-md-10 offset-md-2s' >
                            <div className="box"><div className={this.state.start ? "diskStart" : 'diskStop'}></div></div>
                            <div>
                                <img className='songImgMusic' src={this.state.songImg} />
                            </div>
                            <div className='audioDiv' >
                                <audio
                                    className='audio'
                                    controls
                                    onPlay={this.startSong}
                                    onPause={this.pauseSong}
                                    src={this.state.song}>

                                    <code>audio</code> element.
                                </audio>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default MusicPlaying