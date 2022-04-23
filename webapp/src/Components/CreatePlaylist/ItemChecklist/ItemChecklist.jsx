import React from "react";
// import {Button} from "@material-ui/core";
// import {Link} from "react-router-dom";

class SideBarOptions extends React.Component {


    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {  
            // selectedSongs : this.props.data
        };
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected() {
        this.myRef.current.parentNode.querySelector('input').classList.toggle('checked')
        console.log('Checked Class Toggled');
        // this.myRef.current.checked ? this.myRef.current.className.toggle('checked') : this.myRef.current.className.toggle('checked'); 
        // console.log(`ItemCK---- ${ this.myRef.current.checked ? this.myRef.current.name : 'Not'}`);
        // this.setState({
        //     selectedSongs : {
        //         ...this.state.selectedSongs,
        //         [this.myRef.current.name] : this.myRef.current.checked
        //     }
        // });
        // console.log(this.state.selectedSongs);
    }

    render() {
        const id = this.props.id;
        const title = this.props.title;
        // const seletedSongs = this.props.data;
        // const className = this.props.className;
        // const sideBarRef = useRef();
        const href = this.props.href;
        return (
            <div>
                <label>
                    <input type="checkbox" className='SongCheckbox' name={title} id={id} ref={this.myRef} onClick={this.handleSelected}/>
                    {title}
                </label>
            </div>
        );
    }
}

export default SideBarOptions;