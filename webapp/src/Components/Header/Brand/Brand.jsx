/*
    Author:     Web Of Lies
    Subject:    INFO6150 - Web Design and UX
    Purpose:    JSX file for Header Logo
*/
import React from "react";
import "./Brand.scss";
import Logo from "../../../Assets/Img/logo.png";

class Brand extends React.Component {
    render() {
        return (
            <div  className={"brand"}>
                <h1>
                    <img src={Logo} width={"50px"} alt=""/>
                    On The Aux &nbsp;
                </h1>
            </div>
        );
    }
}

export default Brand;