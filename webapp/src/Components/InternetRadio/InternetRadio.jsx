import React from 'react'
import Song from '../../Assets/Audio/song.mp3';
import songImg from '../../Assets/Img/songImage.jpg';
import { Box } from '@material-ui/core';
import { Slider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './InternetRadio.scss'

class InternetRadio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            show: false,
            stations: [101.8, 98.3],
            frequencys: [
                {
                    value: 70.0,
                    label: "70.0hz"
                },
                {
                    value: 80.0,
                    label: "80.0hz"
                },
                {
                    value: 90.0,
                    label: "90.0hz"
                },
                {
                    value: 100.0,
                    label: "100.0hz"
                },
                {
                    value: 110.0,
                    label: "110.0hz"
                },
            ]
        }
    }

    startSong = () => {
        this.setState({ start: true })
    }
    pauseSong = () => {
        this.setState({ start: false })
    }
    valuetext = (value) => {
        // console.log(this.state.stations,value)
        // if(this.state.stations.indexOf(value) != -1){
        //     this.setState({show:true})
        // }else{
        //     this.setState({show:false})
        // }
        return `${value}hz`;
    }

    changeStation = (event, value) => {
        console.log(this.state.stations, value, this.state.stations.indexOf(value))
        if (this.state.stations.indexOf(value) != -1) {
            this.setState({ show: true })
        } else {
            this.setState({ show: false, start: false })

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='internetRadio col-md-10 offset-md-2s' >
                        <div className="box"><div className={this.state.start ? "diskStart" : 'diskStop'}></div></div>
                        <div className='radioBox'>
                            <Box sx={{ width: 600 }}>
                                <Slider
                                    aria-label="Always visible"
                                    defaultValue={98.3}
                                    getAriaValueText={this.valuetext}
                                    step={0.1}
                                    marks={this.state.frequencys}
                                    valueLabelDisplay="on"
                                    onChange={this.changeStation}
                                    max={110}
                                    min={70}

                                />
                            </Box>
                            <div className='audioDiv' >
                                {(this.state.show) ? <audio
                                    className='audio'
                                    controls
                                    onPlay={this.startSong}
                                    onPause={this.pauseSong}
                                    src={Song}>
                                    <code>audio</code> element.

                                </audio> : null}
                            </div>
                        </div>

                        <Link to={"/AccountSetting"}>Account</Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}



export default InternetRadio