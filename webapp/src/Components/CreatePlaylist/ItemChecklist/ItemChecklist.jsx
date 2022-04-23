import React from "react";

class SideBarOptions extends React.Component {
    
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected() {
        this.myRef.current.parentNode.querySelector('input').classList.toggle('checked')
    }

    render() {
        const id = this.props.id;
        const title = this.props.title;
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