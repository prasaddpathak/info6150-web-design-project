/*
    Author:     Web Of Lies
    Subject:    INFO6150 - Web Design and UX
    Purpose:    JSX file for DropDownGenreList Component
*/
import React from "react";
import './DropDownGenreList.scss';
import Button from "@material-ui/core/Button";
import LangList from "./LangList/LangList";

class DropDownGenreList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listOfLanguage : [
                "Any",
                "Rock",
                "Pop",
                "Jazz"
            ],
            selectedList : {
                "Any": false,
                "Rock": false,
                "Pop": false,
                "Jazz": false
            }
        };
        this.handleSelected = this.handleSelected.bind(this);
        this.handleLangSelect = this.handleLangSelect.bind(this);
    }

    handleSelected = (val, selected) => {
        this.setState({
            selectedList : {...this.state.selectedList,
                [val] : selected
            }
        });
    };

    handleLangSelect = (e) => {
        e.preventDefault();
        const list = [];
        for (let i in this.state.selectedList) {
            if (this.state.selectedList[i] === true)
                list.push(i.toLowerCase());
        }
        console.log(list);
    };

    render() {
        return (
            <div className={"dropdown"}>
                <div className={"dropdown-head"}>
                    <p>Pick the Genre you want to listen to</p>
                </div>
                <div className={"lang-list"}>
                    {this.state.listOfLanguage.map((item) => {
                        return (
                            <LangList onClick={this.handleSelected} key={item} item={item}/>
                        );
                    })}
                </div>
                <div className={"button-div"}>
                    <Button onClick={this.handleLangSelect}>
                        Update
                    </Button>
                </div>
            </div>
        );
    }
}
export default DropDownGenreList;