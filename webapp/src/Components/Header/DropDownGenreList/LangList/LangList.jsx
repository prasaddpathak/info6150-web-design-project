import React from 'react';
import './LangList.scss';
import Button from "@material-ui/core/Button";

class LangList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected : false
        };
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected = e => {
        e.stopPropagation();
        this.props.onClick(this.props.item,!this.state.isSelected);
        this.setState({
            isSelected : !this.state.isSelected
        });
    };

    render() {
        return (
            <Button onClick={this.handleSelected}>
                {this.props.item}
            </Button>
    )};
}

export default LangList;