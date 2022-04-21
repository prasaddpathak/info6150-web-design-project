import React from 'react';
import './LangList.scss';
import Button from "@material-ui/core/Button";

class LangList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected : false,
            onSelect : {}
        };
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected = e => {
        e.stopPropagation();
        this.props.onClick(this.props.item,!this.state.isSelected);
        this.setState({
            isSelected : !this.state.isSelected
        });
        if (this.state.isSelected) {
            this.setState({
                onSelect : {}
            });
        } else {
            this.setState({
                onSelect : {
                    backgroundColor:"#a2d5f2",
                    color:"#191919"
                }
            });
        }
    };

    render() {
        return (
            <Button style={this.state.onSelect} onClick={this.handleSelected}>
                {this.props.item}
            </Button>
    )};
}

export default LangList;