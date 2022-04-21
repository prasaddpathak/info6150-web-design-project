import React from "react";
import "./NavBar.scss";
import SideBarOptions from "./NavBarOptions/NavBarOptions";
import {ExploreOutlined, HomeOutlined, PlaylistPlay, SearchOutlined, Radio, EventNote} from "@material-ui/icons";

class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        // this.handleOpenGenreList = this.handleOpenGenreList.bind(this);
        // this.handleOpenProfile = this.handleOpenProfile.bind(this);
    }

    ElementStyle = {
        backgroundColor: "#f6f6f6",
        color: "#2b2024"
    }

    render() {
        return (
            <aside style={this.ElementStyle} className={"aside-bar"}>
                <div className="aside-bar-container">
                    <p className={"p1"}>
                        <span>LIBRARY</span>
                    </p>
                    <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title={"Home"} />
                    <SideBarOptions className={"lib-sub"} Icon={ExploreOutlined} href={"/home/about"}  title={"About"}/>
                    <SideBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/home/search"}  title={"Search"}/>
                    <SideBarOptions className={"lib-sub"} Icon={Radio} href={"/home/radio"}  title={"Radio"}/>
                    <SideBarOptions className={"lib-sub"} Icon={EventNote} href={"/home/events"}  title={"Events"}/>
                </div>
                <div className="aside-bar-container playlist">
                    <p className={"p1"}>
                        <span>MY PLAYLIST</span>
                    </p>
                    <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/instrumental"}  title={"Instrumental"}/>
                    <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/electronic"}  title={"Electronic"}/>
                </div>
            </aside>
        );
    }
}

export default SideBar;