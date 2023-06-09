/*
    Author:     Prasad Pathak
    Subject:    INFO6150 - Web Design and UX
    Purpose:    JSX file for the Header Bar
*/
import './Header.scss';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {Avatar, Button} from "@material-ui/core";
import DropDownGenreList from "./DropDownGenreList/DropDownGenreList";
import Brand from "./Brand/Brand";
import DropDownProfile from "./DropDownProfile/DropDownProfile";
import SearchBar from './SearchBar/SearchBar';
import { isExpired, decodeToken } from "react-jwt";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLanguageListOpen : false,
            isOpenProfile : false,
            avatarInitials : ""
        };
        this.handleOpenGenreList = this.handleOpenGenreList.bind(this);
        this.handleOpenProfile = this.handleOpenProfile.bind(this);
    }

    handleOpenGenreList() {
        // console.log('Clicked Genre');
        if (this.state.isOpenProfile === true)
            this.setState({
                isOpenProfile : false,
                isLanguageListOpen : !this.state.isLanguageListOpen
        });
        else
        this.setState({
            isLanguageListOpen : !this.state.isLanguageListOpen
        }); 
        // console.log('State: ' + this.state.isLanguageListOpen); 
    }

    handleOpenProfile() {
        // console.log('Clicked Profile');
        if (this.state.isLanguageListOpen === true)
            this.setState({
                isOpenProfile : !this.state.isOpenProfile,
                isLanguageListOpen : false
            });
        else
            this.setState({
                isOpenProfile : !this.state.isOpenProfile,
            });
        // console.log('State: ' + this.state.isLanguageListOpen); 

    }

    ElementStyle = {
        backgroundColor: "#f6f6f6",
        color: "#2b2024"
    }

    componentDidMount() {
        const token = localStorage.getItem("token");
        console.log(` Header Conditional flow: ${token}`);
        !token ? window.location.href = "/login" : console.log(`Token Present`) 
        const myDecodedToken = decodeToken(token);
        const initials = myDecodedToken.email[0].toUpperCase()
        this.setState({
            avatarInitials : initials
        });
    }

    render(){
        return (
            <nav>
                <Brand/>
                <SearchBar/>
                {
                    window.location.pathname === "/home" ? 
                    <div className={"language"} onClick={this.handleOpenGenreList}>
                        <Button className={"Dropdown-btn"}
                                endIcon={this.state.isLanguageListOpen ? <ExpandMoreIcon/> : <ExpandLessIcon/>}>
                            <div className="wrapper">
                                <div>Genre</div>
                            </div>
                        </Button>
                        {
                            this.state.isLanguageListOpen
                            && 
                            <DropDownGenreList/> 
                        }
                    </div>
                    :
                    <></>
                }

                <div className="profile" onClick={this.handleOpenProfile}>
                    <Button className={"Dropdown-btn"}
                            startIcon={<Avatar style={{width:'30px',height:'30px',padding:'18px'}} >{this.state.avatarInitials}</Avatar>}
                            endIcon={this.state.isOpenProfile ? <ExpandMoreIcon/> : <ExpandLessIcon/>}>
    
                    </Button>
                    {
                        this.state.isOpenProfile &&
                        <DropDownProfile/>
                    }
                </div>
            </nav>
        );
    }
}

export default Header;