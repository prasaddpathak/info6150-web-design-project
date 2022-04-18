/*
    Author:     Prasad A. Pathak
    NEU ID:     002925486
    Email:      pathak.pra@northeastern.edu
    Subject:    INFO6150 - Web Design and UX
    Purpose:    Javascript file for the Todo Item Container React component
*/
import './Header.scss';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {Avatar, Button} from "@material-ui/core";
import DropDownLanguageList from "./DropDownGenreList/DropDownGenreList";
import SearchBar from "./SearchBar/SearchBar";
import Brand from "./Brand/Brand";
import DropDownProfile from "./DropDownProfile/DropDownProfile";

class Header extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return(
        <h1>Hello World!</h1>
        );
    }
}

export default Header;