import React, { useContext } from "react";
import './DropDownProfile.scss';
// import {ThemeContext} from "../../api/Theme";
import HoverButton from "./HoverButton/HoverButton";
import { AccountBox, ExitToApp } from "@material-ui/icons";

class DropDownProfile extends React.Component {
    // const useStyle = useContext(ThemeContext);

    constructor(props) {
        super(props);
    }

    handleLogoutClick = () => {
        console.log('Clicked Logout');
        localStorage.removeItem("token");
        // window.location.href = "/login";
        // window.location.href("/login")
        // window.location.reload();
    }

    render() {
        return (
            <div className="dropdown-profile">
                <a href="/home/accountSetting" ><HoverButton href={""} HoverButton Icon={AccountBox} variant={"text"} text={"Profile"} /></a>
                <HoverButton Icon={ExitToApp} variant={"text"} text={"Logout"} onClickFunc = {this.handleLogoutClick}/>
                {/*<HoverButton Icon={Explore} variant={"text"} text={"About"}/>*/}
            </div>
        );
    }
}
export default DropDownProfile;