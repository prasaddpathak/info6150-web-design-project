import React from 'react'
import { Box } from '@material-ui/core';
import { Slider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './InternetRadio.scss'
import { RadioBrowserApi } from "radio-browser-api"
class InternetRadio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            show: false,
            stations: [101.8, 98.3],
            currantStation: {},
            stationData: {},
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
    // Radio Api called for setting up the country   
    componentDidMount() {

        this.setupApi("country")


        // return stations
    }
    //Radio Api setting fucntion made to see in the browser    
    setupApi = async stationFilter => {
        const api = new RadioBrowserApi(fetch.bind(window), "My Radio App")
        let obj = {}
        let start = 70
        const stations = await api
            .searchStations({
                language: "english",
                tag: stationFilter,
                limit: 5,
            })
            .then(data => {
                data.map((res, i) => {
                    obj[String(this.state.frequencys[i].value)] = res
                })
                this.setState({ stationData: obj })
                console.log(this.state.stationData)
            })
    }
    //Disc has to be start as running while playing the music
    startSong = () => {
        this.setState({ start: true })
    }
    //Disc has to be pause as running while playing the music    
    pauseSong = () => {
        this.setState({ start: false })
    }
    // Rdio station port has to be visible as value(ex:- 70.0,80.0 etc)
    valuetext = (value) => {
        // console.log(this.state.stations,value)
        // if(this.state.stations.indexOf(value) != -1){
        //     this.setState({show:true})
        // }else{
        //     this.setState({show:false})
        // }
        return `${value}hz`;
    }
    //Changestation  fucntion is made for changing the radio port and set the value is true for defined port 

    changeStation = (event, value) => {
        this.setState({ show: false, start: false })
        console.log(value)
        console.log(this.state.stationData)
        if (this.state.stationData[value]) {

            this.setState({ show: true })
            this.setState({ currantStation: this.state.stationData[value] })
        } else {
            this.setState({ currantStation: {} })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className='radioMain'>
                    <div className='row'>
                        <div className='internetRadio col-md-10 offset-md-2s' >
                            <div className="box"><div className={this.state.start ? "diskStart" : 'diskStop'}></div></div>
                            <div>
                                {(this.state.currantStation.favicon) ? <img className='songImgRadio' src={this.state.currantStation.favicon} /> : null}
                            </div>


                            {/* <Link to={"/AccountSetting"}>Account</Link> */}
                        </div>
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
                                    src={this.state.currantStation.urlResolved}>
                                    <code>audio</code> element.

                                </audio> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}



export default InternetRadio