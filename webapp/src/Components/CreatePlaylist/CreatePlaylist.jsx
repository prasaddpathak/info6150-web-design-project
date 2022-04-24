import axios from "axios";
import React from "react";
import './CreatePlaylist.scss';
import ItemChecklist from  './ItemChecklist/ItemChecklist';

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
        console.log(`Playlist Name : ${playlistName} \nSelected Songs: ${selectedSongs}`);
        const playlist = {
            "playlist_name" : playlistName,
            "playlist_details" : selectedSongs
        }
        axios.put(
            'http://127.0.0.1:9008/user/6260db9f897199ffa4f2135e/playlist',
            playlist
        ).then((response) =>{
            console.log(response);
        })
    }


    onClick(e) {
        // e.preventDefault()
        const elements = document.getElementsByClassName('checked');
        const selectedSongsFromUI = []
        for(let item of elements) {
            selectedSongsFromUI.push(item.name);
        }
        // console.log(selectedSongsFromUI);
        const playlistNameTag = document.getElementsByClassName('PlaylistName');
        // console.log(playlistNameTag[0].value);
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
                            <input type="text" className="PlaylistName" name="Playlist Name" id="playlistName" />
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