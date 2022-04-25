import React from "react";
import axios from "axios";
import "./NavBar.scss";
import NavBarOptions from "./NavBarOptions/NavBarOptions";
import {ExploreOutlined, HomeOutlined, PlaylistPlay, SearchOutlined, Radio, EventNote, LibraryAdd, Delete} from "@material-ui/icons";
import { isExpired, decodeToken } from "react-jwt";
import { history } from "react-router-dom";

class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playlistTags : []
        };
    }

    componentDidMount() {
        // console.log(`NavBar Token : ${this.props.authToken}`);
        // const myDecodedToken = decodeToken(this.props.authToken);
        // const isMyTokenExpired = isExpired(this.props.authToken);
        const token = localStorage.getItem("token");
        console.log(` Conditional flow: ${token}`);
        !token ? window.location.href = "/login" : console.log(`Token Present`) 
        const myDecodedToken = decodeToken(localStorage.getItem("token"));
        const isMyTokenExpired = isExpired(localStorage.getItem("token"));
        console.log(`Is Expired : ${isMyTokenExpired} \nToken Details : `);
        console.log(myDecodedToken);
        console.log(myDecodedToken.userId);
        const userId = myDecodedToken.userId;

        axios.get(`http://127.0.0.1:9008/user/${userId}/playlist`)
        .then((response) => {
            console.log(`Returned Playlists:  ${response.data}`);
            const playlistsFetched = response.data.map((i,k) => 
                
                     <NavBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/"+i}  title={i} key={k} isPlaylistItem = {true} />)
                    // <NavBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/PlaylistCardContainer/"+i}  title={i} key={k} isPlaylistItem = {true} />)

            this.setState({
                playlistTags : [...playlistsFetched]
            });
        });
    }

    render() {
        return (
            <aside style={this.ElementStyle} className={"aside-bar"}>
                <div className="aside-bar-container">
                    <p className={"p1"}>
                        <span>LIBRARY</span>
                    </p>
                    <NavBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title={"Home"} />
                    <NavBarOptions className={"lib-sub"} Icon={ExploreOutlined} href={"/home/about"}  title={"About"}/>
                    <NavBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/home/search"}  title={"Search"}/>
                    <NavBarOptions className={"lib-sub"} Icon={Radio} href={"/home/radio"}  title={"Radio"}/>
                    <NavBarOptions className={"lib-sub"} Icon={EventNote} href={"/home/events"}  title={"Events"}/>
                </div>
                <div className="aside-bar-container playlist">
                    <p className={"p1"}>
                        <span>MY PLAYLIST</span>
                    </p>
                    <NavBarOptions className={"lib-sub"} Icon={LibraryAdd} href={"/home/playlist"}  title={"Create a New Playlist"}/>
                    {this.state.playlistTags}
                </div>
            </aside>
        );
    }
}

export default SideBar;