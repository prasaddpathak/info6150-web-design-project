import React from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

class SideBarOptions extends React.Component {


    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {  
        };
    }

    render() {
        const Icon = this.props.Icon;
        const title = this.props.title;
        const className = this.props.className;
        // const sideBarRef = useRef();
        const href = this.props.href;
        return (
            <Button onClick={()=>{this.myRef.current.click();window.location.reload();}} className={className} startIcon={Icon && <Icon/>}>
                <Link ref={this.myRef} to={href}/>
                {title}
            </Button>
        );
    }
}

export default SideBarOptions;