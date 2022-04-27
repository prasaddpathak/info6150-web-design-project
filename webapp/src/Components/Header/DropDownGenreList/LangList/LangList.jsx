/*
    Author:     Web Of Lies
    Subject:    INFO6150 - Web Design and UX
    Purpose:    JSX file for GenreList Element
*/
import React from 'react';
import './LangList.scss';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

class LangList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected : false,
            onSelect : {}
        };
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected = e => {
        e.stopPropagation();
        this.props.onClick(this.props.item,!this.state.isSelected);
        this.setState({
            isSelected : !this.state.isSelected
        });
        if (this.state.isSelected) {
            this.setState({
                onSelect : {}
            });
        } else {
            this.setState({
                onSelect : {
                    backgroundColor:"#a2d5f2",
                    color:"#191919"
                }
            });
        }
    };

    render() {
        return (
            <Button style={this.state.onSelect} onClick={this.handleSelected}>
                <Link to={"/home/events"}/>
                {this.props.item}
            </Button>
    )};
}

export default LangList;