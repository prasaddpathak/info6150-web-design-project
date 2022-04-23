import React from "react";
import './NavBarOptions.scss'
// import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Button, IconButton} from '@material-ui/core';
import {Delete} from "@material-ui/icons";
import axios from "axios";



class SideBarOptions extends React.Component {


    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {  
            title : this.props.title
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        console.log(`Deleting Playlist : ${this.state.title}`);
        axios.delete('http://127.0.0.1:9008/user/6260db9f897199ffa4f2135e/playlist/'+this.state.title)
            .then((response) => {
                response.modified_count ? console.log(`Playlist Deleted`) : console.log(`Playlist Not Deleted`)
                window.location.reload();
            });
    }

    render() {
        const Icon = this.props.Icon;
        const title = this.props.title;
        const className = this.props.className;
        const isPlaylistItem = this.props.isPlaylistItem;
        // const sideBarRef = useRef();
        const href = this.props.href;
        const playlistClass = isPlaylistItem? "playlistItem" : "";
        return (
            <div className={playlistClass}>
                <Button onClick={()=>{this.myRef.current.click();window.location.reload();}} className={className} startIcon={Icon && <Icon/>}>
                    <Link ref={this.myRef} to={href}/>
                    {title}
                </Button>
                {
                    isPlaylistItem ? 
                        <IconButton color="secondary" onClick={this.handleDelete}>
                            <Delete></Delete>
                        </IconButton>
                    :
                    <></>
                }  
                
                
            </div>
            
        );
    }
}

export default SideBarOptions;