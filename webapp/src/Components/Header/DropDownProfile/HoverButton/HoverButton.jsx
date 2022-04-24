import React from 'react';
import './HoverButton.scss';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

class HoverButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currStyle : null
        };
        this.handleOver = this.handleOver.bind(this);
        this.handleOut = this.handleOut.bind(this);
    }

    handleOver() {
        this.setState({
            currStyle : {
                backgroundColor:"#a2d5f2",
                color:"#191919"
            }
        });
        // setCurrStyle(useStyle.button.onHover)
    };

    handleOut()  {
        this.setState({
            currStyle : null
        });
    };

    render() {
        return (
            // <Link to={"/home/"+this.props.text.toLowerCase()} className={"hb"}>
                <Button style={this.currStyle}
                        startIcon={this.props.Icon?<this.props.Icon/>:null}
                        variant={this.props.variant}   
                        onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
                    {this.props.text}
                </Button>
            // </Link>
        );
    }

}

export default HoverButton;