import React from 'react'
import Song from '../../Assets/Audio/song.mp3';
import songImg from '../MusicImg/musicpicture.jpg';
import { Link } from 'react-router-dom';
import './MusicPlaying.scss'
import song from '../../Assets/Audio/song.mp3'
import disc from '../../Assets/Img/songDisk.png'

//class musicplaying component defined

class MusicPlaying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false
        }
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
                                <img className='songImgMusic' src={songImg} />
                            </div>
                            <div className='audioDiv' >
                                <audio
                                    className='audio'
                                    controls
                                    onPlay={this.startSong}
                                    onPause={this.pauseSong}
                                    src='http://ncs.io/Shakedown'>
                                    // src={song}
                                    {/* > */}
                                    <code>audio</code> element.
                                </audio>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MusicPlaying