import React from 'react'
import Song from '../../song.mp3';
import songImg from '../../songImage.jpg';
import { Link } from 'react-router-dom';
import './MusicPlaying.scss'
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
                <div className='row'>
                    <div className='internetRadio col-md-10 offset-md-2s' >
                        <div className="box"><div className={this.state.start ? "diskStart" : 'diskStop'}></div></div>
                        <div>
                            <img className='songImg' src={songImg} />
                        </div>
                        <div className='audioDiv' >
                            <audio
                                className='audio'
                                controls
                                onPlay={this.startSong}
                                onPause={this.pauseSong}
                                src='http://youtu.be/qJT0mc3q6Lg'>
                                <code>audio</code> element.
                            </audio>
                        </div>
                        <Link to={"/AccountSetting"}>Account</Link><br />
                        <Link to={"/InternetRadio"}>Radio</Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MusicPlaying