import React, {useContext} from "react";
import './DropDownProfile.scss';
// import {ThemeContext} from "../../api/Theme";
import HoverButton from "./HoverButton/HoverButton";
import {AccountBox, ExitToApp} from "@material-ui/icons";

class DropDownProfile extends React.Component {
    // const useStyle = useContext(ThemeContext);

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dropdown-profile">
                <HoverButton Icon={AccountBox} variant={"text"} text={"Profile"}/>
                <HoverButton Icon={ExitToApp} variant={"text"} text={"Logout"}/>
                {/*<HoverButton Icon={Explore} variant={"text"} text={"About"}/>*/}
            </div>
        );
    }
}
export default DropDownProfile;