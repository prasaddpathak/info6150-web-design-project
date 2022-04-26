/*
    Author:     Prasad Pathak
    Subject:    INFO6150 - Web Design and UX
    Purpose:    JSX file for CreatePlaylist page
*/
import axios from "axios";
import React from "react";
import './CreatePlaylist.scss';
import ItemChecklist from  './ItemChecklist/ItemChecklist';
import { decodeToken } from "react-jwt";

class CreatePlaylist extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            checkedItems : new Map(),
            songsList : [],
            songListTags :[],
            selectedSongs :[]
        }
        this.onClick = this.onClick.bind(this);
        this.addPlaylistToUser = this.addPlaylistToUser.bind(this);
    }

    addPlaylistToUser(playlistName, selectedSongs) {
        //Check if auth token is present
        const token = localStorage.getItem("token");
        !token ? this.history.push("/login") : console.log(`Token Present`) 
        const myDecodedToken = decodeToken(localStorage.getItem("token"));
        const userId = myDecodedToken.userId;

        const playlist = {
            "playlist_name" : playlistName,
            "playlist_details" : selectedSongs
        }
        // Append the new playlist to the existing array of playlists
        axios.put(
            `http://127.0.0.1:9008/user/${userId}/playlist`,
            playlist
        ).then((response) =>{
            console.log(response);
        })
    }

    onClick(e) {
        const elements = document.getElementsByClassName('checked');
        const selectedSongsFromUI = []
        for(let item of elements) {
            selectedSongsFromUI.push(item.name);
        }
        const playlistNameTag = document.getElementsByClassName('PlaylistName');
        this.addPlaylistToUser(playlistNameTag[0].value, selectedSongsFromUI)
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:9008/music')
            .then((response) =>{
                const songsFetched = []
                response.data.map((item)=> songsFetched.push(item.name))
                this.setState({
                    songsList : [...songsFetched]
                });
                const tags = this.state.songsList.map((i,k) => <ItemChecklist title={i} id={k} key={k} />)                
                this.setState({
                    songListTags : [...tags]
                })
            });      
    }

    render() {
        return(
            <div className="create-playlist-container">
                <div className="create-playlist-box">
                    <h1>Create a New Playlist</h1>
                    <form onSubmit={this.onClick}>
                        <label>
                            Playlist Name:
                            <input type="text" className="PlaylistName" name="Playlist Name" id="playlistName" required/>
                        </label>
                        {this.state.songListTags}
                        <br></br>
                        <input type="submit" value="Create" />
                    </form>
                </div>    
            </div>
        );
    }
}

export default CreatePlaylist;