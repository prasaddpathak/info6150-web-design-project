/*
    Author:     Web of lies
    Subject:    INFO6150 - Web Design and UX
    Purpose:    JSX file for the Hover Button under the profile dropdown
*/
import React from 'react';
import './HoverButton.scss';
import {Button} from "@material-ui/core";

class HoverButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currStyle : null
        };
    }

    render() {
        return (
            <Button startIcon={this.props.Icon?<this.props.Icon/>:null}
                    variant={this.props.variant}   
                    onClick = {this.props.onClickFunc}>
                {this.props.text}
            </Button>
        );
    }
}

export default HoverButton;