/*
    Author:     Web of lies
    Subject:    INFO6150 - Web Design and UX
    Purpose:    JSX file for DropDown option for Profile
*/
import React from "react";
import './DropDownProfile.scss';
import HoverButton from "./HoverButton/HoverButton";
import { AccountBox, ExitToApp } from "@material-ui/icons";

class DropDownProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLogoutClick = () => {
        console.log('Clicked Logout');
        localStorage.removeItem("token");
        window.location.reload();
    }

    render() {
        return (
            <div className="dropdown-profile">
                <HoverButton href={""} HoverButton Icon={AccountBox} variant={"text"} text={"Profile"} onClickFunc = {()=>{window.location.href = '/home/accountSetting'}}/>
                <HoverButton Icon={ExitToApp} variant={"text"} text={"Logout"} onClickFunc = {this.handleLogoutClick}/>
            </div>
        );
    }
}
export default DropDownProfile;