import React from "react";
import {Link} from "react-router-dom";
import "./Brand.scss";
import Logo from "../../../Assets/Img/logo.png";

class Brand extends React.Component {
    render() {
        return (
            <div  className={"brand"}>
                <h1>
                    <img src={Logo} width={"50px"} alt=""/>
                    On The Aux
                </h1>
            </div>
        );
    }
}

export default Brand;