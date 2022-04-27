/*
    Author:     Web Of Lies
    Subject:    INFO6150 - Web Design and UX
    Purpose:    JSX file for SearchBar Element
*/
import React from "react";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import CancelIcon from "@material-ui/icons/Cancel";
import './SearchBar.scss';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSearchBarOpen : false,
            searchQuery : ""
        };
        this.handleSearchBarOpen = this.handleSearchBarOpen.bind(this);
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearchBarOpen() {
        this.setState({
            isSearchBarOpen : !this.state.isSearchBarOpen
        })
    };
    
    handleSearchQuery(e) {
        this.setState({
            searchQuery : e.target.value
        });
    };

    handleSearch(e) {
        e.preventDefault();
        if (this.state.searchQuery !== "")
            console.log(this.state.searchQuery);
    };

    render() {
        return (
            <div className={`${this.state.isSearchBarOpen ? "SearchBar  open" : "SearchBar"}`}>
                <form onSubmit={this.handleSearch} className={"search-container"}>
                    {
                        this.state.isSearchBarOpen &&
                        <>
                            <SearchSharpIcon style={{color: "grey"}} className="search-icon" fontSize="small"/>
                            <input id={"search-input"}
                                   name={"searchQuery"}
                                   value={this.state.searchQuery}
                                   onChange={this.handleSearchQuery}
                                   placeholder={"Looking for a track ...?"}
                                   type="text"
                            />
                        </>
                    }
                </form>
                {
                    !this.state.isSearchBarOpen &&
                    <div className={"SearchBar-customPlaceholderOpen"} onClick={this.handleSearchBarOpen}>
                        <SearchSharpIcon style={{color: "grey"}} className="search-icon" fontSize="small"/>
                        <div className={"hide"}>&nbsp;Search</div>
                    </div>
                }
                {
                    this.state.isSearchBarOpen &&
                    <div className={"SearchBar-customPlaceholderClose"} onClick={this.handleSearchBarOpen}>
                        <CancelIcon style={{color: "grey"}} className="cancel hide" fontSize="small"/>
                    </div>
                }
            </div>
        );
    }
};

export default SearchBar;