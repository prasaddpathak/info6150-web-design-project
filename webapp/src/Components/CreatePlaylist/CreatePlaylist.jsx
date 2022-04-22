import React from "react";
import './CreatePlaylist.scss';

class CreatePlaylist extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            checkedItems : new Map(),
            songListTags :[]
        }
        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange() {
        console.log(`Clicked: ${this.myRef.current.name}`);
        this.setState({
            checkedItems : this.state.checkedItems.set(this.myRef.current.name, this.myRef.current.checked)
        })
        console.log(this.state.checkedItems);
    }
    onClick() {
        alert(`Form Clicked`);
    }

    componentDidMount() {
        console.log('Loaded');
    }

    render() {
        return(
            <div className="create-playlist-container">
                <h1>Create a New Playlist</h1>
                <form onSubmit={this.onClick}>
                    <label>
                        Playlist Name:
                        <input type="text" name="Playlist Name" id="playlistName" />
                    </label>
                    <div>
                        <label>
                            <input type="checkbox" name="option1" id="option1" ref={this.myRef} onChange={this.handleChange}/>
                            Song1
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="option2" id="option2" ref={this.myRef} onChange={this.handleChange}/>
                            Song2
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="option3" id="option3" onChange={this.handleChange}/>
                            Song3
                        </label>
                    </div>

                    <br></br>
                    <input type="submit" value="Create" />
                </form>
            </div>
        );
    }
}

export default CreatePlaylist;